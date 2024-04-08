export type Subject = {
  id: number
  name: string
  definition: string
  exercisesUser: {
    id: number
    statement: string
    difficultyLevel: string
    dateSolved: string
    isAnswerRight: boolean
  }[]
  lessons: {
    id: number
    title: string
    link: string
  }[]
}
