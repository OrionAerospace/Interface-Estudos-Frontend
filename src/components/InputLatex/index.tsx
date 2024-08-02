import MathInput from 'react-math-keyboard'
import React, { useRef, useState } from 'react'

export default function App() {
  const firstMathfieldRef = useRef()
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  const clear = () => {
    firstMathfieldRef.current.latex('')
  }

  return (
    <div className="App">
      <>
        <div>
          <div>
            <p style={{ fontSize: '2rem' }}>Escreva a formula :</p>
            <MathInput
              setValue={setValue1}
              setMathfieldRef={(mathfield) => (firstMathfieldRef.current = mathfield)}
              divisionFormat="obelus"
            />
            <button onClick={() => clear()}>Limpar</button>
          </div>
        </div>
      </>
    </div>
  )
}
