import { User } from './User'

export type UserLogin = Pick<User, 'username'> & {
  password: string
  isChecked: boolean
}
