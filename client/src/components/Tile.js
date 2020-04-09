import React, { Component } from 'react'
import blankTile from '../assets/img/blankTile.png'
import placePot from '../assets/img/placePot.png'
import stage1 from '../assets/img/stage1.png'

export class Tile extends Component {
    render() {
        return (
            <div>
                <div className="stack">
                    <img className="stack-tiles" src={blankTile} />
                    <img className="stack-tiles" src={placePot} />
                </div>
            </div>
        )
    }
}

export default Tile
