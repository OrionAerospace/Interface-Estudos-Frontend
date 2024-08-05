import React, { useState, FormEvent } from 'react'
import styles from '@/components/QuestionForm/styles.module.scss'

interface QuestionFormProps {
  addQuestion: (newQuestion: any) => void
}

interface Question {
  id: string
  question: string
  details: string
  response: string
  exerciseType: string
  exerciseSubType?: string
  subject?: string
  lessonNumber?: string
  tags: string[]
  creatorId: string
  creationDate: string
  displayNumber: number
  correctCount: number
  incorrectCount: number
}

export function QuestionForm({ addQuestion }: QuestionFormProps) {
  const [question, setQuestion] = useState<string>('')
  const [details, setDetails] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [exerciseType, setExerciseType] = useState<string>('')
  const [exerciseSubType, setExerciseSubType] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [lessonNumber, setLessonNumber] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState<string>('')
  const [displayNumber, setDisplayNumber] = useState<number>(1)
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [incorrectCount, setIncorrectCount] = useState<number>(0)
  const [creatorId] = useState<string>('exampleCreatorId') // Logica de id ainda não sei como seria

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const newQuestion: Question = {
      id: `${Date.now()}`, // Gera um ID unico basedo no timestamp
      question,
      details,
      response,
      exerciseType,
      exerciseSubType,
      subject,
      lessonNumber,
      tags,
      creatorId,
      creationDate: new Date().toISOString(),
      displayNumber,
      correctCount,
      incorrectCount,
    }

    addQuestion(newQuestion)

    setQuestion('')
    setDetails('')
    setResponse('')
    setExerciseType('')
    setExerciseSubType('')
    setSubject('')
    setLessonNumber('')
    setTags([])
    setTagInput('')
    setDisplayNumber(displayNumber + 1)
    setCorrectCount(0)
    setIncorrectCount(0)
  }

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput) && tags.length < 3) {
      setTags([...tags, tagInput])
      setTagInput('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Enunciado:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Detalhamento/Explicação (link de vídeo, imagem ou texto):</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={styles.textarea}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Resposta:</label>
        <input
          type="text"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Tipo de Exercício:</label>
        <select
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          required
          className={styles.select}
        >
          <option value="">Selecione o tipo de exercício</option>
          <option value="fixation">Tipo fixação</option>
          <option value="generic">Tipo genérico</option>
        </select>
      </div>
      {exerciseType === 'fixation' && (
        <>
          <div className={styles.formGroup}>
            <label>Disciplina:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Número da aula:</label>
            <input
              type="text"
              value={lessonNumber}
              onChange={(e) => setLessonNumber(e.target.value)}
              className={styles.input}
            />
          </div>
        </>
      )}
      <div className={styles.formGroup}>
        <label>Tags (até 3):</label>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          className={styles.input}
        />
        <button type="button" onClick={handleAddTag} className={styles.button}>
          Adicionar Tags
        </button>
      </div>
      <button type="submit" className={styles.submitButton}>
        Criar
      </button>
    </form>
  )
}
