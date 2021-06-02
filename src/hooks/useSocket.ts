import React from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { useRouter } from 'next/router'

const apiId = process.env.API_ID
const endpoint = `wss://${apiId}.execute-api.ap-northeast-1.amazonaws.com/production`

const useSocket = () => {
  const router = useRouter()
  const { sendJsonMessage, lastMessage, readyState, getWebSocket } =
    useWebSocket(`${endpoint}?roomId=${router.query.id}`, { share: true })

  React.useEffect(() => () => getWebSocket()?.close(), [getWebSocket])

  const connectionStatusMessage = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  return {
    sendJsonMessage,
    lastMessage,
    connectionStatus: readyState,
    connectionStatusMessage: connectionStatusMessage,
  }
}

export default useSocket
