import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import {
  createStore
} from 'redux';
class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="App">
        <Header/>
        { <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> }
      </div>
    );
  }
}

export default App;