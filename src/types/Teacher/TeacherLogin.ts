import { Teacher } from './Teacher'

export type TeacherLogin = Pick<Teacher, 'username'> & {
  password: string
}
