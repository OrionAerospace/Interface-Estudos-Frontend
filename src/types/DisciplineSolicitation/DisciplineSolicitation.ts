import { Discipline } from '../Discipline/Discipline'
import { User } from '../User/User'

export type DisciplineSolicitation = {
  idDisciplineSolicitation: number
  discipline: Discipline
  user: User
  date: Date
}
