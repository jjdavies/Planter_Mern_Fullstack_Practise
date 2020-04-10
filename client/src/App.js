import React, { Component } from 'react'
import './App.css'

import Tile from './components/Tile'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tiles: Array(100)
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Planter
        </header>
        <div className="grid-container">
          {this.state.tiles.fill(<Tile />)}
          
        </div>
      </div>
    );
  }
}

export default App;
