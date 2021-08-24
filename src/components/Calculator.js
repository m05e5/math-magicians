import React, { useState } from 'react';
import calculate from '../logic/calculator';

const Calculator = () => {
  const defaultObject = {
    total: null,
    next: null,
    operation: null,
  };
  const [object, changeState] = useState(defaultObject);

  const handleEvent = (e) => {
    const btns = e.target.innerHTML;
    if (object.operation === '÷' && btns === '=' && object.next === '0') {
      document.getElementById('calc-p').innerHTML = 'Math Error';
      setTimeout(() => {
        changeState({ ...defaultObject });
      }, 1000);
    } else if (object.operation !== null && btns === '=' && object.next !== null && object.total === null) {
      document.getElementById('calc-p').innerHTML = 'Syntaxe Error';
      setTimeout(() => {
        changeState({ ...defaultObject });
      }, 1000);
    } else {
      const boo = calculate(object, btns);
      changeState({ ...object, ...boo });
    }
  };

  const buttonsList = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="calc">
      <div className="calc-input">
        <p id="calc-p">
          {(object.total || '') + (object.operation || '') + (object.next || '')}
        </p>
      </div>
      <table className="calc-buttons">
        {buttonsList.map((btn) => <button type="button" onClick={(e) => handleEvent(e)} className="btnn" key={btn} name={btn}>{btn}</button>)}
      </table>
    </div>
  );
};

export default Calculator;
