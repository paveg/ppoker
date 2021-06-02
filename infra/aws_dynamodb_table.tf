resource "aws_dynamodb_table" "ppoker_connections" {
  name           = "ppoker_connections"
  billing_mode   = "PROVISIONED"
  hash_key       = "connectionId"
  # range_key      = "roomId"
  read_capacity  = 5
  write_capacity = 5
  tags           = {}
  attribute {
    name = "connectionId"
    type = "S"
  }
  # attribute {
  #   name = "roomId"
  #   type = "S"
  # }
}
