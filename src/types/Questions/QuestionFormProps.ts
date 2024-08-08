import { Question } from './Question'

export interface QuestionFormProps {
  addQuestion: (newQuestion: Question) => void
}
