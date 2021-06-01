resource "aws_apigatewayv2_deployment" "Deployment" {
  api_id = aws_apigatewayv2_api.ppoker_websocket_api.id

  depends_on = [
    aws_apigatewayv2_route.connect_route,
    aws_apigatewayv2_route.disconnect_route,
    aws_apigatewayv2_route.sendmessage_route,
  ]
}
