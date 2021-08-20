/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  /* eslint-enable */
  render() {
    return (
      <div className="App">
        <div className="App-body" id="App-body">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
