// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

var AWS = require('aws-sdk')
AWS.config.update({ region: process.env.AWS_REGION })
var DDB = new AWS.DynamoDB({ apiVersion: '2012-10-08' })

exports.handler = function (event, context, callback) {
  let roomId = ''
  const params = event.queryStringParameters
  if (params && params.roomId) {
    roomId = params.roomId
  }

  const putParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      connectionId: { S: event.requestContext.connectionId },
      roomId: { S: roomId },
    },
  }

  DDB.putItem(putParams, function (err) {
    callback(null, {
      statusCode: err ? 500 : 200,
      body: err ? 'Failed to connect: ' + JSON.stringify(err) : 'Connected.',
    })
  })
}
