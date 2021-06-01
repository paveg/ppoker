resource "aws_apigatewayv2_stage" "ppoker_websocket_api_stage" {
  api_id        = aws_apigatewayv2_api.ppoker_websocket_api.id
  name          = "production"
  deployment_id = aws_apigatewayv2_deployment.Deployment.id
}
