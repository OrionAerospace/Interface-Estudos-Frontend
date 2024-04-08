export type Subject = {
  id: number
  name: string
  definition: string
  exercisesUser: {
    idExercise: number
    statement: string
    difficultyLevel: string
    dateSolved: string
    isAnswerRight: boolean
  }[]
  lessons: {
    idLesson: number
    title: string
    link: string
  }[]
}
