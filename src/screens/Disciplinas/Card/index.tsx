import { Subject } from '@/types/Discipline/Subject/Subject'
import { Exercice } from '@/types/Exercices/Exercices'
import Link from 'next/link'

interface CardProps {
  name: 'Vídeo aulas' | 'Em progresso' | 'Exercícios Resolvidos'
  subject: Subject
  exercices: Exercice[]
}

export function Card({ name, subject, exercices }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-between shadow-lg p-3 rounded-lg bg-slate-50 w-[250px] h-[550px]">
      <h1 className="text-center text-lg m-2 w-full">{name}</h1>
      {name != 'Exercícios Resolvidos' &&
        subject.classes.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-1 mb-2 bg-slate-200 p-1 rounded-lg shadow w-full"
          >
            <h2 className="font-bold text-1xl">{el.topic}</h2>
            <ul className="flex flex-col">
              {el.lessons.map((lesson, index) => (
                <li key={index} className="flex justify-evenly items-center gap-1 text-sm">
                  {lesson.name}
                  {name == 'Vídeo aulas' && (
                    <Link href="/disciplinas/aulas">
                      <img src="/assets/icons/play.png" alt="Play" width="24px" />
                    </Link>
                  )}
                  {name == 'Em progresso' &&
                    (lesson.conclusion ? (
                      <img src="/assets/icons/check.png" alt="Concluído" width="24px" />
                    ) : (
                      <img src="/assets/icons/close.png" alt="Não concluído" width="24px" />
                    ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      {name == 'Exercícios Resolvidos' &&
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
        ))}
    </div>
  )
}
