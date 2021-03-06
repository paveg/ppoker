import { atom } from 'recoil'
import User from '../types/user'

export const userState = atom<User>({
  key: 'user',
  default: {
    role: 'moderator',
  },
})
