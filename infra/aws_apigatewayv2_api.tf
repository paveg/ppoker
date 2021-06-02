resource "aws_apigatewayv2_api" "ppoker_websocket_api" {
  name                         = "ppoker_websocket_api"
  protocol_type                = "WEBSOCKET"
  route_selection_expression   = "$request.body.action"
  api_key_selection_expression = "$request.header.x-api-key"
  disable_execute_api_endpoint = false
  tags                         = {}
  tags_all                     = {}
}
