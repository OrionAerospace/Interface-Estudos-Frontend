import { Tag } from '@/types/Tags/Tags'

export interface QuestionBase {
  question: string
  details?: string
  response: string
  exerciseType: string
  exerciseSubType?: string
  subject?: string
  lessonNumber?: string
  tags: Tag[]
}

export interface Question extends QuestionBase {
  id: string
  creatorId: string
  creationDate: string
  displayNumber: number
  correctCount: number
  incorrectCount: number
}
