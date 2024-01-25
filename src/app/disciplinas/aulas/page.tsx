import { Button } from '@/components/Button'
import { ProgressBar } from '@/components/ProgressBar'

export default function Aula() {
  return (
    <>
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-96 border-2 border-[#ccc] rounded-3xl p-2"
      />
      <Button>Voltar</Button>
      <div className="flex gap-10 mt-16 justify-between w-full items-center">
        <div className="flex flex-col gap-4 w-96">
          <ProgressBar progress={70} title="Título 1" />
          <ProgressBar progress={20} title="Título 2" />
          <ProgressBar progress={40} title="Título 3" />
          <ProgressBar progress={90} title="Título 4" />
          <ProgressBar progress={10} title="Título 5" />
        </div>
        <div className="flex flex-col items-end gap-4">
          <iframe
            className="w-[640px] h-[360px] 2xl:w-[1024px] 2xl:h-[576px]"
            src="https://www.youtube.com/embed/sssWkSLa1Hg"
            title="UTFPR - Câmpus Ponta Grossa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          ></iframe>
          <Button>Finalizar Lição</Button>
        </div>
      </div>
    </>
  )
}
