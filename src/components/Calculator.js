/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */

import React from 'react';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleEvent(e) {
    const btns = e.target.innerHTML;
    const boo = calculate(this.state, btns);
    boo.next !== undefined ? this.state.next = boo.next : null;
    boo.total !== undefined ? this.state.total = boo.total : null;
    boo.operation !== undefined ? this.state.operation = boo.operation : null;
    document.getElementById('calc-p').innerHTML = (this.state.total || '') + (this.state.operation || '') + (this.state.next || '');
  }

  render() {
    const buttonsList = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    return (
      <div className="calc">
        <div className="calc-input">
          <p id="calc-p" />
        </div>
        <table className="calc-buttons">
          {buttonsList.map((btn) => <button type="button" onClick={(e) => this.handleEvent(e)} className="btnn" key={btn} name={btn}>{btn}</button>)}
        </table>
      </div>
    );
  }
}

export default Calculator;
