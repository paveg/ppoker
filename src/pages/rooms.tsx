import { useRecoilValue } from 'recoil'
import { userSelector } from '../selectors/userSelector'
import User from '../types/user'

const Room: React.FC = () => {
  const user: User = useRecoilValue(userSelector)

  return <>role: {user.role}</>
}

export default Room
