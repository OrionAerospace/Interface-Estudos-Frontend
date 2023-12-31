import { User } from './User'

export interface UserLogin extends Omit<User, 'name' | 'email'> {
  password: string
}
