'use client'

import styles from './styles.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { disciplines } from '@/utils/disciplines'

export default function Discipline() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const disciplineName = searchParams.get('disciplina')
  const selectedDisciplina = disciplines.find((obj) => obj.name === disciplineName)

  return (
    <>
      <div className={styles['discipline-header']}>
        <img
          src={selectedDisciplina?.icon}
          alt={`Ícone da disciplina ${selectedDisciplina?.name}`}
          className={styles['discipline-icon']}
        />
        <h1 className="text-2xl font-semibold mt-1">{selectedDisciplina?.name}</h1>
      </div>
      <div className={styles['subjects']}>
        <h1>Todos os assuntos de {selectedDisciplina?.name}</h1>
        {selectedDisciplina?.subjects.map((suject, index: number) => (
          <div key={index} className={styles['subject-card']}>
            <button
              onClick={() => {
                router.push(
                  `/disciplinas/assunto?disciplina=${selectedDisciplina?.name.replace(
                    ' ',
                    '%20'
                  )}&assunto=${suject.name.replace(' ', '%20')}`
                )
              }}
            >
              {suject.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
