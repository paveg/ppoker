resource "aws_apigatewayv2_route" "connect_route" {
  api_id             = aws_apigatewayv2_api.ppoker_websocket_api.id
  route_key          = "$connect"
  operation_name     = "ConnectRoute"
  target             = "integrations/${aws_apigatewayv2_integration.ppoker_ws_connect_integration.id}"
  authorization_type = "NONE"
}

resource "aws_apigatewayv2_route" "disconnect_route" {
  api_id         = aws_apigatewayv2_api.ppoker_websocket_api.id
  route_key      = "$disconnect"
  operation_name = "DisconnectRoute"
  target         = "integrations/${aws_apigatewayv2_integration.ppoker_ws_disconnect_integration.id}"
}

resource "aws_apigatewayv2_route" "sendmessage_route" {
  api_id         = aws_apigatewayv2_api.ppoker_websocket_api.id
  route_key      = "sendmessage"
  operation_name = "SendMessageRoute"
  target         = "integrations/${aws_apigatewayv2_integration.ppoker_ws_sendmessage_integration.id}"
}
