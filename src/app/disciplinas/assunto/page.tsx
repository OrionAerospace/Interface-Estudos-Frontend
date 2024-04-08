'use client'

import { Card } from '@/screens/Disciplinas/Card'
import styles from './styles.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/Button'
import { useDiscipline } from '@/services/DisciplineService'
import { Discipline } from '@/types/Discipline/Discipline'
import { useEffect, useState } from 'react'

export default function SubjectPage() {
  const [disciplines, setDisciplines] = useState([] as Discipline[])
  const { getAllDIsicplines } = useDiscipline()
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedDiscipline = disciplines.find((obj) => obj.name === searchParams.get('disciplina'))!

  const selectedSubject = decodeURI(searchParams.get('assunto')!)
  const contentId = decodeURI(searchParams.get('contentId')!)

  // prettier-ignore
  useEffect(() => {
    (async () => {
      setDisciplines(await getAllDIsicplines())
    })()
  }, [searchParams])

  function handleClick() {
    router.back()
  }

  return (
    <>
      <div className={styles['discipline-header']}>
        <img
          src={`/assets/icons/${selectedDiscipline?.code}.png`}
          alt={`Ícone da disciplina ${selectedDiscipline?.name}`}
          className={styles['discipline-icon']}
        />
        <h1 className="text-2xl font-semibold mt-1">
          {selectedDiscipline?.name} | {selectedSubject}
        </h1>
        <Button onClick={handleClick}>Voltar</Button>
      </div>
      <div className="flex w-full flex-wrap align-baseline justify-evenly gap-3 mt-10">
        <Card name="Vídeo aulas" content={{ id: parseInt(contentId), name: selectedSubject }} />
        {/* <Card name="Em progresso" content={{ id: parseInt(contentId), name: selectedSubject }} />
        <Card
          name="Exercícios Resolvidos"
          content={{ id: parseInt(contentId), name: selectedSubject }}
        /> */}
      </div>
    </>
  )
}
