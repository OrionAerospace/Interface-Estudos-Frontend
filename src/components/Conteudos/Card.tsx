const Card = ({ nome: cardNome, assunto, exercicios }: any) => {
  return (
    <div className="flex flex-col items-center justify-between shadow-lg p-3 rounded-lg bg-slate-50 w-[250px] h-[550px]">
      <h1 className="text-center text-lg m-2 w-full">{cardNome}</h1>
      {cardNome != 'Exercícios Resolvidos'
        ? assunto.map((el: any) => {
            return (
              <div className="flex flex-col items-center justify-between gap-1 mb-2 bg-slate-200 p-1 rounded-lg shadow w-full">
                <h2 className="font-bold text-1xl">{el.nome}</h2>
                <ul className="flex flex-col">
                  {el.aulas.map((aula: any, index: number) => {
                    return (
                      <li className="flex justify-evenly items-center gap-1 text-sm">
                        {aula.nome}

                        {cardNome == 'Vídeo aulas' && (
                          <img src="/assets/icons/play.png" alt="Play" width="24px"/>
                        )}
                        {cardNome == 'Em progresso' &&
                          (aula.concluido == true ? (
                            <img src="/assets/icons/check.png" alt="Concluído" width="24px"/>
                          ) : (
                            <img src="/assets/icons/close.png" alt="Não concluído" width="24px"/>
                          ))}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })
        : exercicios.map((el: any, index: number) => {
            return (
              <div className="flex flex-col items-start justify-start gap-1 mb-2 bg-slate-200 p-2 rounded-lg shadow w-full">
                <div className="flex items-center justify-between w-full">
                  <h2 className="font-bold text-1xl">{el.nome}</h2>
                  <img src="/assets/icons/lock.png" alt="Tarefa Bloqueada" width="24px" />
                </div>
                
                <p className="text-sm from-neutral-600">Data: {el.data}</p>
                <p className="text-sm from-neutral-600">Detalhes: {el.detalhes}</p>
              </div>
            )
          })}
    </div>
  )
}

export default Card
