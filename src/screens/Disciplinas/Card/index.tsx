'use client'

import { useCookies } from '@/services/CookiesService'
import { useSubjects } from '@/services/SubjectsService'
import { Subject } from '@/types/Subject/Subject'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CardProps {
  name: 'Vídeo aulas' | 'Em progresso' | 'Exercícios Resolvidos'
  content: {
    id: number
    name: string
  }
}

export function Card({ name, content }: CardProps) {
  const [subjects, setSubjects] = useState([] as Subject[])
  const { getAllSubjects } = useSubjects()
  const { getCookie } = useCookies()
  const user = getCookie('user')

  // prettier-ignore
  useEffect(() => {
    (async () => {
      setSubjects(await getAllSubjects(user?.value.userId, content.id))
    })()
  }, [])

  return (
    <div className="flex flex-col items-center justify-between shadow-lg p-3 rounded-lg bg-slate-50 w-[250px] h-[550px]">
      <h1 className="text-center text-lg m-2 w-full">{name}</h1>
      {name != 'Exercícios Resolvidos' &&
        subjects.map((subject, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 mb-2 bg-slate-200 p-1 rounded-lg shadow w-full"
          >
            <h2 className="font-bold text-1xl">{subject.name}</h2>
            <ul className="flex flex-col">
              {subject?.lessons?.map((lesson, index) => (
                <li key={index} className="flex justify-evenly items-center gap-1 text-sm">
                  {lesson.title}
                  {name == 'Vídeo aulas' && (
                    <Link href="/disciplinas/aulas">
                      <img src="/assets/icons/play.png" alt="Play" width="24px" />
                    </Link>
                  )}
                  {/* {name == 'Em progresso' &&
                    (lesson.id ? (
                      <img src="/assets/icons/check.png" alt="Concluído" width="24px" />
                    ) : (
                      <img src="/assets/icons/close.png" alt="Não concluído" width="24px" />
                    ))} */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      {/* {name == 'Exercícios Resolvidos' &&
        exercices.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-1 mb-2 bg-slate-200 p-2 rounded-lg shadow w-full"
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold text-1xl">{el.name}</h2>
              <img src="/assets/icons/article.png" alt="Tarefa Bloqueada" width="24px" />
            </div>
            <p className="text-sm from-neutral-600">Data: {el.date}</p>
            <p className="text-sm from-neutral-600">Detalhes: {el.details}</p>
          </div>
        ))} */}
    </div>
  )
}
