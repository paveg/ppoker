resource "aws_dynamodb_table" "ppoker_connections" {
  name           = "ppoker_connections"
  billing_mode   = "PROVISIONED"
  hash_key       = "connectionId"
  read_capacity  = 1
  write_capacity = 1
  tags           = {}
  attribute {
    name = "connectionId"
    type = "S"
  }
  attribute {
    name = "roomId"
    type = "S"
  }
  global_secondary_index {
    name            = "roomId-index"
    hash_key        = "roomId"
    read_capacity   = 1
    write_capacity  = 1
    projection_type = "KEYS_ONLY"
  }
}
