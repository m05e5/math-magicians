/* eslint-disable linebreak-style */
/* eslint-disable */
import React from 'react';

class Calculator extends React.Component {
  
  /* eslint-enable */
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calc">
        <input type="number" className="calc-input" name="calc-input" id="calc-input" aria-describedby="helpId" placeholder=" " />
        <table className="calc-buttons">
          <tr className="tr">
            <td className="bg-1">AC</td>
            <td className="bg-1">+/-</td>
            <td className="bg-1">%</td>
            <td className="bg-2">+</td>
          </tr>
          <tr>
            <td className="bg-1">7</td>
            <td className="bg-1">8</td>
            <td className="bg-1">9</td>
            <td className="bg-2">x</td>
          </tr>
          <tr className="tr">
            <td className="bg-1">4</td>
            <td className="bg-1">5</td>
            <td className="bg-1">6</td>
            <td className="bg-2">-</td>
          </tr>
          <tr className="tr">
            <td className="bg-1">1</td>
            <td className="bg-1">2</td>
            <td className="bg-1">3</td>
            <td className="bg-2">+</td>
          </tr>
          <tr className="tr">
            <td className="bg-1" colSpan="2">0</td>
            <td className="bg-1">.</td>
            <td className="bg-2">=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
