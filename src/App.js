/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import CalculatePage from './components/CalculatePage';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="App-body" id="App-body">
            <Switch>
              <Route path="/quote">
                <Quote />
              </Route>
              <Route path="/calculator">
                <CalculatePage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
