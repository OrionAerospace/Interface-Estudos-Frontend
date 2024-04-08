'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

export default function Aula() {
  const searchParams = useSearchParams()
  const url = decodeURI(searchParams.get('aulaUrl')!)
  const title = decodeURI(searchParams.get('aulaTitulo')!)

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Button onClick={useRouter().back}>Voltar</Button>
      </div>
      {/* <div className="flex gap-10 mt-16 justify-between w-full items-center"> */}
      {/* <div className="flex flex-col gap-4 w-96">
          <ProgressBar progress={70} title="Título 1" />
          <ProgressBar progress={20} title="Título 2" />
          <ProgressBar progress={40} title="Título 3" />
          <ProgressBar progress={90} title="Título 4" />
          <ProgressBar progress={10} title="Título 5" />
        </div> */}
      <div className="flex flex-col items-end gap-4">
        <iframe
          className="w-[640px] h-[360px] 2xl:w-[1270px] 2xl:h-[715px] rounded-lg"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
        {/* <Button>Finalizar Lição</Button> */}
        {/* </div> */}
      </div>
    </div>
  )
}
