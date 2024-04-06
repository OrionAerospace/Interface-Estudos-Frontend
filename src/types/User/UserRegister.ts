import { User } from './User'

export type UserRegister = User & {
  password: string
  confirmPassword: string
  isChecked: boolean
}
