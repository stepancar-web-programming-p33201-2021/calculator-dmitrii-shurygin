import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.', '**'];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc+value);

    if (!ops.includes(value)) {
      value=value+calc;
      setResult(value.toString())
    }
  }

  const calculate = () => {
    if (calc == '') {
      return;
    }

    setCalc(eval(calc).toString());
  }

  const deleteAll = () => { 
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -calc.length);
    setCalc(value);
  } 

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i<10; i++){
      digits.push(
        <button 
          onClick={() => updateCalc(i.toString())} 
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div tabIndex="-1" className="display">
          { calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('**')}>x^y</button>
          <button onClick={deleteAll}>Clear</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
