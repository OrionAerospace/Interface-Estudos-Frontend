import React from 'react'
import TimerButtons from '@/components/TimerButtons' // Ajuste o caminho conforme necessário

const App = () => {
  const buttonData = [
    { label: 'Botão 1', info: 'Informação extra 1' },
    { label: 'Botão 2', info: 'Informação extra 2' },
    { label: 'Botão 3', info: 'Informação extra 3' },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-xl">Clique nos Botões com Timer!</h1>
      <TimerButtons buttonData={buttonData} />
    </div>
  )
}

export default App
