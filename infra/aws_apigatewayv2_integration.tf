resource "aws_apigatewayv2_integration" "ppoker_ws_connect_integration" {
  api_id             = aws_apigatewayv2_api.ppoker_websocket_api.id
  integration_type   = "AWS_PROXY"
  description        = "lambda example"
  integration_uri    = aws_lambda_function.ppoker_connect_lambda.invoke_arn
  integration_method = "POST"
}

resource "aws_apigatewayv2_integration" "ppoker_ws_disconnect_integration" {
  api_id             = aws_apigatewayv2_api.ppoker_websocket_api.id
  integration_type   = "AWS_PROXY"
  description        = "lambda example"
  integration_uri    = aws_lambda_function.ppoker_disconnect_lambda.invoke_arn
  integration_method = "POST"
}

resource "aws_apigatewayv2_integration" "ppoker_ws_sendmessage_integration" {
  api_id             = aws_apigatewayv2_api.ppoker_websocket_api.id
  integration_type   = "AWS_PROXY"
  description        = "lambda example"
  integration_uri    = aws_lambda_function.ppoker_sendmessage_lambda.invoke_arn
  integration_method = "POST"
}
