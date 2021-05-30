import { useRecoilValue } from 'recoil'
import { userSelector } from '../selectors/userSelector'
import User from '../types/user'
import { useRouter } from 'next/router'

const Room: React.FC = () => {
  const user: User = useRecoilValue(userSelector)
  const router = useRouter()

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
        </div>
      </div>
    </>
  )
}

export default Room
