const AWS = require('aws-sdk')

const DDB = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

const { TABLE_NAME } = process.env

exports.handler = async (event, _context) => {
  const roomId = JSON.parse(event.body).data.roomId
  const queryParams = {
    TableName: TABLE_NAME,
    KeyConditionExpression: '#ROOMID = :ROOMID',
    ExpressionAttributeNames: { '#ROOMID': 'roomId' },
    ExpressionAttributeValues: { ':ROOMID': roomId },
    IndexName: 'roomId-index',
  }
  const connectionData = await DDB.query(queryParams).promise()

  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint:
      event.requestContext.domainName + '/' + event.requestContext.stage,
  })

  const postData = JSON.parse(event.body).data.message
  const selfConnectionId = event.requestContext.connectionId

  const postCalls = connectionData.Items.map(async ({ connectionId }) => {
    try {
      if (selfConnectionId !== connectionId) {
        await apigwManagementApi
          .postToConnection({ ConnectionId: connectionId, Data: postData })
          .promise()
      }
    } catch (e) {
      if (e.statusCode === 410) {
        await DDB.delete({
          TableName: TABLE_NAME,
          Key: { connectionId },
        }).promise()
      } else {
        throw e
      }
    }
  })

  try {
    await Promise.all(postCalls)
  } catch (e) {
    return { statusCode: 500, body: e.stack }
  }

  return { statusCode: 200, body: 'Data sent.' }
}
