data "archive_file" "ConnectZip" {
  type = "zip"
  source_dir = "lambdas/ppoker_connect_lambda"
  output_path = "lambdas/dist/ppoker_connect_lambda.zip"
}

data "archive_file" "DisconnectZip" {
  type        = "zip"
  source_dir = "lambdas/ppoker_disconnect_lambda"
  output_path = "lambdas/dist/ppoker_disconnect_lambda.zip"
}

data "archive_file" "MessageZip" {
  type        = "zip"
  source_dir = "lambdas/ppoker_message_lambda"
  output_path = "lambdas/dist/ppoker_message_lambda.zip"
}
