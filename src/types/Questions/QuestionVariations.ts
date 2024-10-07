import { QuestionBase } from './Question'

export type NewQuestion = Pick<
  QuestionBase,
  'question' | 'details' | 'response' | 'exerciseType' | 'tags'
>

export type FixationQuestion = Pick<
  QuestionBase,
  'question' | 'details' | 'response' | 'exerciseType' | 'tags' | 'subject' | 'lessonNumber'
>
