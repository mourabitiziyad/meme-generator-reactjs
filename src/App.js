import React, {Component} from 'react';
import Header from "./Header.js"

import './App.css';
import MemeGenerator from './MemeGenerator.js';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>  
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
