resource "aws_lambda_permission" "ppoker_lambda_permission_connect" {
  depends_on    = [aws_lambda_function.ppoker_connect_lambda]
  principal     = "apigateway.amazonaws.com"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ppoker_connect_lambda.function_name
  source_arn    = "${aws_apigatewayv2_api.ppoker_websocket_api.execution_arn}/*/$connect"
}

resource "aws_lambda_permission" "ppoker_lambda_permission_disconnect" {
  depends_on    = [aws_lambda_function.ppoker_disconnect_lambda]
  principal     = "apigateway.amazonaws.com"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ppoker_disconnect_lambda.function_name
  source_arn    = "${aws_apigatewayv2_api.ppoker_websocket_api.execution_arn}/*/$disconnect"
}

resource "aws_lambda_permission" "ppoker_lambda_permission_message" {
  depends_on    = [aws_lambda_function.ppoker_message_lambda]
  principal     = "apigateway.amazonaws.com"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ppoker_message_lambda.function_name
  source_arn    = "${aws_apigatewayv2_api.ppoker_websocket_api.execution_arn}/*/message"
}
