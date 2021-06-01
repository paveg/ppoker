resource "aws_iam_role" "ppoker_iam_role" {
  name        = "ppoker_iam_role"
  description = "Allows Lambda functions to call AWS services on your behalf."
  tags        = {}
  assume_role_policy = jsonencode({
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
    Version = "2012-10-17"
  })

  inline_policy {
    name = "ppoker_dynamodb_policy"
    policy = jsonencode({
      Statement = [
        {
          Action = [
            "dynamodb:BatchGetItem",
            "dynamodb:BatchWriteItem",
            "dynamodb:PutItem",
            "dynamodb:DescribeTable",
            "dynamodb:DeleteItem",
            "dynamodb:GetItem",
            "dynamodb:Scan",
            "dynamodb:Query",
            "dynamodb:UpdateItem",
          ]
          Effect = "Allow"
          Resource = [
            "arn:aws:dynamodb:ap-northeast-1:324509266413:table/ppoker_connections",
            "arn:aws:dynamodb:ap-northeast-1:324509266413:table/ppoker_connections/index/*",
          ]
          Sid = "VisualEditor0"
        }
      ]
      Version = "2012-10-17"
    })
  }

  inline_policy {
    name = "ppoker_execute_api_policy"
    policy = jsonencode({
      Statement = [
        {
          Action   = "execute-api:*"
          Effect   = "Allow"
          Resource = "arn:aws:execute-api:ap-northeast-1:324509266413:*/*/*/*"
          Sid      = "VisualEditor0"
        },
      ]
      Version = "2012-10-17"
    })
  }
}
