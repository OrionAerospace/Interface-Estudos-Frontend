import MathInput from 'react-math-keyboard'
import React, { useState } from 'react'
import { Button } from '../ui/button'

export function InputLatex() {
  const [valor1, setValue1] = useState('')

  const clear = () => {
    setValue1('') // Limpa o valor diretamente no estado
  }

  return (
    <div>
      <div>
        <p style={{ fontSize: '2rem' }}>Escreva a formula :</p>
        <MathInput
          value={valor1} // Controla o valor do MathInput com o estado
          onChange={(newValue) => setValue1(newValue)} // Atualiza o estado com a mudança
          divisionFormat="obelus"
        />
        <button onClick={clear}>Limpar</button>
        <Button variant="default" size="lg">
          Confirmar
        </Button>
      </div>
    </div>
  )
}
