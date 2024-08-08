'use client'
import React from 'react'
import { QuestionForm } from '@/screens/QuestionForm/page'

function TestQuestionForm() {
  const mockAddQuestion = (newQuestion: any) => {
    console.log('Question added:', newQuestion)
  }

  return (
    <div>
      <h1>Teste de Criação Questão</h1>
      <QuestionForm addQuestion={mockAddQuestion} />
    </div>
  )
}

export default TestQuestionForm
