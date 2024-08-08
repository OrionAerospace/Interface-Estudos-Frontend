'use client'
import React from 'react'
import { QuestionForm } from '@/screens/QuestionForm/page'
import { Question } from '@/types/Questions/Question'

function TestQuestionForm() {
  const mockAddQuestion = (newQuestion: Question) => {
    console.log('Question added:', newQuestion)
  }

  return (
    <div>
      <h1>Teste criação de questão</h1>
      <QuestionForm addQuestion={mockAddQuestion} />
    </div>
  )
}

export default TestQuestionForm
