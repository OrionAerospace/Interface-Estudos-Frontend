import React, { useEffect, useState } from 'react'

interface TimedButtonProps {
  timeout: number // tempo em milissegundos antes de desabilitar o botão
  onClick: () => void // função a ser chamada quando o botão é clicado
}

const TimedButton: React.FC<TimedButtonProps> = ({ timeout, onClick }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(true)
    }, timeout)

    // Limpar o timer se o componente for desmontado antes do tempo
    return () => clearTimeout(timer)
  }, [timeout])

  return (
    <button onClick={onClick} disabled={isDisabled}>
      {isDisabled ? 'Desabilitado' : 'Clique aqui'}
    </button>
  )
}

export default TimedButton
