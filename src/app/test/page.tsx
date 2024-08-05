'use client'
import React from 'react'
import { QuestionForm } from '@/components/QuestionForm/page'

function TestQuestionForm() {
  const mockAddQuestion = (newQuestion: any) => {
    console.log('Question added:', newQuestion)
  }

  return (
    <div>
      <h1>Teste de cadastro de questão</h1>
      <QuestionForm addQuestion={mockAddQuestion} />
    </div>
  )
}
export default TestQuestionForm
