import React, { Component } from 'react'
import './App.css'

import Tile from './components/Tile'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr:[0,0,0,1,1]
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Planter
        </header>
        <div className="grid-container">
          {this.state.arr.map(()=>(
            <Tile className="tile" />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
