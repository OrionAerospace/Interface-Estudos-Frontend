import { User } from './User'

export type UserLogin = Omit<User, 'name' | 'email'> & {
  password: string
}
