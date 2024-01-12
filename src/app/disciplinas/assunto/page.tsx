'use client'

import { Card } from '@/screens/Disciplinas/Card'
import styles from './styles.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { disciplines } from '@/utils/disciplines'
import { exercices } from '@/utils/exercices'

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
    <div className={styles['discipline-box']}>
      <div className={styles['discipline-header']}>
        <img
          src={selectedDisciplina?.icon}
          alt={`Ícone da disciplina ${selectedDisciplina?.name}`}
          className={styles['discipline-icon']}
        />
        <h1>
          {selectedDisciplina?.name} | {selectedSubject}
        </h1>
        <button className={styles['move-right']} onClick={handleClick}>
          Voltar
        </button>
      </div>
      <div className="flex w-full flex-wrap align-baseline justify-evenly gap-3 mt-10">
        <Card name="Vídeo aulas" subject={subject} exercices={exercices} />
        <Card name="Em progresso" subject={subject} exercices={exercices} />
        <Card name="Exercícios Resolvidos" subject={subject} exercices={exercices} />
      </div>
    </div>
  )
}
