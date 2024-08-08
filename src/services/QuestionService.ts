import { Question } from '@/types/Questions/Question'

const mockAddQuestion = (newQuestion: Question): Promise<{ data: Question }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2
      if (success) {
        resolve({ data: newQuestion })
      } else {
        reject(new Error('Failed to add question'))
      }
    }, 1000)
  })
}

export { mockAddQuestion }
