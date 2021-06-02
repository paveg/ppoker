resource "aws_lambda_function" "ppoker_connect_lambda" {
  filename      =  data.archive_file.ConnectZip.output_path
  function_name = "ppoker_connect_lambda"
  role          = aws_iam_role.ppoker_iam_role.arn
  handler       = "index.handler"
  source_code_hash = data.archive_file.ConnectZip.output_base64sha256
  runtime = "nodejs12.x"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.ppoker_connections.name
      API_GATEWAY_ID = aws_apigatewayv2_api.ppoker_websocket_api.id
    }
  }
}

resource "aws_lambda_function" "ppoker_disconnect_lambda" {
  filename      =  data.archive_file.DisconnectZip.output_path
  function_name = "ppoker_disconnect_lambda"
  role          = aws_iam_role.ppoker_iam_role.arn
  handler       = "index.handler"
  source_code_hash = data.archive_file.DisconnectZip.output_base64sha256
  runtime = "nodejs12.x"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.ppoker_connections.name
      API_GATEWAY_ID = aws_apigatewayv2_api.ppoker_websocket_api.id
    }
  }
}

resource "aws_lambda_function" "ppoker_sendmessage_lambda" {
  filename      =  data.archive_file.SendMessageZip.output_path
  function_name = "ppoker_sendmessage_lambda"
  role          = aws_iam_role.ppoker_iam_role.arn
  handler       = "index.handler"
  source_code_hash = data.archive_file.SendMessageZip.output_base64sha256
  runtime = "nodejs12.x"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.ppoker_connections.name
      API_GATEWAY_ID = aws_apigatewayv2_api.ppoker_websocket_api.id
      ENVIRONMENT  = "production"
    }
  }
}
