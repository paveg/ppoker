import { selector } from 'recoil'
import { userState } from '../atoms/userAtom'
import User from '../types/user'

export const userSelector = selector<User>({
  key: 'userSelector',
  get: ({ get }) => {
    const user: User = get(userState)
    return user
  },
})
