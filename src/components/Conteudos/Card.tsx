const Card = ({ nome: cardNome, assunto, exercicios }: any) => {
  return (
    <div>
      <h1>{cardNome}</h1>
      {cardNome != 'Exercícios Resolvidos'
        ? assunto.map((el: any) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2">
                <h2>{el.nome}</h2>
                <ul className="flex flex-col mb-2">
                  {el.aulas.map((aula: any, index: number) => {
                    return (
                      <li className="flex justify-evenly items-center gap-1">
                        {aula.nome}

                        {cardNome == 'Vídeo aulas' && (
                          <img src="/assets/icons/play.png" alt="Play" />
                        )}
                        {cardNome == 'Em progresso' &&
                          (aula.concluido == true ? (
                            <img src="/assets/icons/check.png" alt="Concluído" />
                          ) : (
                            <img src="/assets/icons/close.png" alt="Não concluído" />
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
              <div className="flex flex-col items-start justify-start gap-1 mb-2">
                <h2>{el.nome}</h2>
                <p>Data: {el.data}</p>
                <p>Detalhes: {el.detalhes}</p>
              </div>
            )
          })}
    </div>
  )
}

export default Card
