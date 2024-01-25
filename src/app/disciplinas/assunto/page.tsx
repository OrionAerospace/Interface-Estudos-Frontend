'use client'

import { Card } from '@/screens/Disciplinas/Card'
import styles from './styles.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { disciplines } from '@/utils/disciplines'
import { exercices } from '@/utils/exercices'
import { Button } from '@/components/Button'

export default function SubjectPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedSubject = searchParams.get('assunto')!.replace('%20', '')
  const disciplineName = searchParams.get('disciplina')
  const selectedDisciplina = disciplines.find((obj) => obj.name === disciplineName)
  const [subject] = selectedDisciplina!.subjects.filter((obj) => obj.name === selectedSubject)

  function handleClick() {
    router.back()
  }

  return (
    <>
      <div className={styles['discipline-header']}>
        <img
          src={selectedDisciplina?.icon}
          alt={`Ícone da disciplina ${selectedDisciplina?.name}`}
          className={styles['discipline-icon']}
        />
        <h1 className="text-2xl font-semibold mt-1">
          {selectedDisciplina?.name} | {selectedSubject}
        </h1>
        <Button onClick={handleClick}>Voltar</Button>
      </div>
      <div className="flex w-full flex-wrap align-baseline justify-evenly gap-3 mt-10">
        <Card name="Vídeo aulas" subject={subject} exercices={exercices} />
        <Card name="Em progresso" subject={subject} exercices={exercices} />
        <Card name="Exercícios Resolvidos" subject={subject} exercices={exercices} />
      </div>
    </>
  )
}
