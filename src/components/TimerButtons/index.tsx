'use client'

import * as React from 'react'
import { Button } from '@/components/Button' // Ajuste o caminho conforme necessário

const TimerButtons = ({ buttonData = [] }) => {
  const [timer, setTimer] = React.useState(10)
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [extraInfo, setExtraInfo] = React.useState('')
  const [shuffledButtons, setShuffledButtons] = React.useState([])

  React.useEffect(() => {
    // Embaralha os botões apenas na montagem do componente
    setShuffledButtons(shuffleArray(buttonData))

    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setIsDisabled(true)
    }
  }, [buttonData, timer])

  const handleClick = (data) => {
    console.log(`Botão "${data.label}" clicado! Informações: ${data.info}`)
    setExtraInfo(data.label === 'Dica' ? data.info : '')
  }

  // Função para embaralhar os dados
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  return (
    <div className="space-y-4">
      <p>Tempo restante: {timer}s</p>
      {shuffledButtons.map((data, index) => (
        <Button key={index} onClick={() => handleClick(data)} disabled={isDisabled}>
          {data.label}
        </Button>
      ))}
      {extraInfo && <p className="text-green-600">{extraInfo}</p>}
    </div>
  )
}

export default TimerButtons
