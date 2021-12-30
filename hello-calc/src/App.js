import { useState } from 'react'

function App () {
  const [calc, setCalc] = useState('')

  const ops = ['/', '*', '+', '-', '.', '**']

  const updateCalc = value => {
    if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return
    }

    setCalc(calc + value)
  }

  const updateCalcKeyboard = value => {
    if (!isNaN(value) || ops.includes(value)) {
      updateCalc(value)
    }
  }

  const calculate = () => {
    if (calc === '') {
      return
    }

    setCalc(eval(calc).toString())
  }

  const deleteAll = () => {
    if (calc === '') {
      return
    }

    const value = calc.slice(0, -calc.length)
    setCalc(value)
  }

  const createDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits
  }

  return (
    <div className="App">
      <div className="calculator">
        <input tabIndex="-1" className="display" value={calc || '0'} onKeyDown={(e) => updateCalcKeyboard(e.key)}/>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('**')}>x^y</button>
          <button onClick={deleteAll}>Clear</button>
        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
