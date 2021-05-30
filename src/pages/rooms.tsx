import { useRecoilValue } from 'recoil'
import { userSelector } from '../selectors/userSelector'
import User from '../types/user'
import { useRouter } from 'next/router'

const Room: React.FC = () => {
  const user: User = useRecoilValue(userSelector)
  const router = useRouter()

  return (
    <>
      role: {user.role}
      <br />
      roomId: {router.query.id}
      <br />
      <br />
      TODO: Implementation room page
    </>
  )
}

export default Room
