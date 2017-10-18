import React, { Component } from 'react';
import SwatchPicker from './swatch-picker-component/SwatchPicker';
import logo from './logo.svg';
import './App.css';

//colorList={['#000','#f00','#0f0','#00f','#ff0','#0ff','#f0f','#fff']}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Swatch Picker</h1>
        </header>
        <main className="App-main">
           <SwatchPicker />
        </main>
      </div>
    );
  }
}

export default App;
