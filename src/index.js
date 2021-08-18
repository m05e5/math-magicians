/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import calculate from './logic/calculator';
import Calculator from './components/Calculator';
/* eslint-enable */
const bbb = new Calculator();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const buttons = document.querySelectorAll('.buttonName');
buttons.forEach((calcButton) => {
  calcButton.addEventListener('click', () => {
    bbb.myCalculate(calcButton.innerHTML);
  });
});
