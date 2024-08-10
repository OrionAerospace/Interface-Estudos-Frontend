'use client'
import React from 'react'
import { QuestionForm } from '@/screens/QuestionForm/page'
import { Question } from '@/types/Questions/Question'

function TestQuestionForm() {
  const addQuestion = (newQuestion: Question) => {
    console.log('Questão adicionada:', newQuestion)
  }

  return (
    <div>
      <h1>Teste do Formulário de Questão</h1>
      <QuestionForm addQuestion={addQuestion} />
    </div>
  )
}

export default TestQuestionForm
