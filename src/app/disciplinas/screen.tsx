'use client'

import styles from './styles.module.scss'
import { useSearchParams } from 'next/navigation'
import { Discipline } from '@/types/Discipline/Discipline'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useContent } from '@/services/ContentService'
import { Content } from '@/types/Content/Content'

export function DisciplineScreen({ disciplines }: { disciplines: Discipline[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const disciplineName = searchParams.get('disciplina')
  const selectedDisciplina = disciplines.find((obj) => obj.name === disciplineName)!

  const [contents, setContents] = useState([] as Content[])
  const { getAllContentsByDiscipline } = useContent()

  // prettier-ignore
  useEffect(() => {
    (async () => {
      setContents(await getAllContentsByDiscipline(selectedDisciplina.idDiscipline))
    })()
  }, [searchParams])

  return (
    <>
      <div className={styles['discipline-header']}>
        <img
          src={`/assets/icons/${selectedDisciplina.code}.png`}
          alt={`Ícone da disciplina ${selectedDisciplina?.name}`}
          className={styles['discipline-icon']}
        />
        <h1 className="text-2xl font-semibold mt-1">{selectedDisciplina?.name}</h1>
      </div>
      <div className={styles['subjects']}>
        <h1>Todos os assuntos de {selectedDisciplina?.name}</h1>
        {contents.map((content, index: number) => (
          <div key={index} className={styles['subject-card']}>
            <button
              onClick={() => {
                router.push(
                  `/disciplinas/assunto?disciplina=${selectedDisciplina?.name.replace(
                    ' ',
                    '%20'
                  )}&assunto=${content.name.replace(' ', '%20')}`
                )
              }}
            >
              {content.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
