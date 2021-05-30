export type RoleType = 'moderator' | 'member' | ''
type User = {
  role: RoleType
  roomNumber?: number
}

export default User
