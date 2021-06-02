import { useRecoilValue } from 'recoil'
import { userSelector } from '../selectors/userSelector'
import User from '../types/user'
import { useRouter } from 'next/router'
import { Footer } from '../components/footer'
import useSocket from '../hooks/useSocket'
import * as React from 'react'

type MessageProps = WebSocketEventMap['message'] | null

const Room: React.FC = () => {
  const user: User = useRecoilValue(userSelector)
  const router = useRouter()
  const [msg, setMsg] = React.useState('')
  const messageHistory = React.useRef<MessageProps[]>([])
  const { sendJsonMessage, lastMessage, connectionStatusMessage } = useSocket()

  messageHistory.current = React.useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage],
  )

  const onClick = () => {
    sendJsonMessage({
      action: 'sendmessage',
      data: msg,
    })
  }

  return (
    <>
      <div className="container mx-auto py-10 px-10 font-serif">
        <h1 className="font-semibold md:text-4xl sm:text-2xl text-xl mb-4 text-center">
          <p>Planning Poker</p>
        </h1>
        <div className="text-xs md:text-sm md:text-left">
          role: {user.role}
          <br />
          roomId: {router.query.id}
          <br />
          <br />
          TODO: Implementation room page
          <div className="py-5">
            <ul>
              {messageHistory.current
                .filter((message) => message !== null)
                .map((message: any, idx: number) => (
                  <li key={message + idx}>
                    {message ? '$ ' + message.data : null}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="chat message"
              className="px-2 mr-2 rounded-md border"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
            <button
              type="button"
              className="bg-black text-white px-3 rounded-md hover:bg-gray-800"
              onClick={onClick}
              disabled={connectionStatusMessage !== 'Open'}
            >
              send message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Room
