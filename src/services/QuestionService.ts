import { Question, QuestionBase } from '@/types/Questions/Question'

export function useQuestion() {
  async function addQuestion(question: QuestionBase): Promise<{ data: Question }> {
    // Simula um atraso de rede
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simula uma resposta de sucesso com a questão adicionada
    return {
      data: {
        ...question,
        id: `${Date.now()}`, // gerado pelo backend
        creationDate: new Date().toISOString(), // gerado pelo backend
        correctCount: 0, // gerado pelo backend
        incorrectCount: 0, // gerado pelo backend
        displayNumber: 1, // gerado pelo backend
        creatorId: 'exampleCreatorId', // gerado pelo backend
      },
    }
  }

  return {
    addQuestion,
  }
}
