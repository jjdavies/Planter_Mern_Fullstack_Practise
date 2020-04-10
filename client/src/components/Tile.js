import React, { Component } from 'react'
import axios from 'axios'

import blankTile from '../assets/img/blankTile.png'
import placePot from '../assets/img/placePot.png'
import stage1 from '../assets/img/stage1.png'
import stage2 from '../assets/img/stage2.png'
import stage3 from '../assets/img/stage3.png'
import stage4 from '../assets/img/stage4.png'
import stage5 from '../assets/img/stage5.png'
import stage6 from '../assets/img/stage6.png'
import stage7 from '../assets/img/stage7.png'
import stage8 from '../assets/img/stage8.png'
import stage9 from '../assets/img/stage9.png'

export class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            index:props.index,
            isBlank: true,
            isPlace: false,
            stage:0
        }
    }

    blankTileOver = () => {
        this.setState({
            isBlank: false,
            isPlace: true
        })
    }
    
    placePotOut = () => {
        this.setState({
            isBlank: true,
            isPlace: false
        })
    }
    
    placeClick = () => {
        this.setState({
            isBlank: false,
            isPlace: false,
            stage:1
        })
        //update the DB
        const planter = {
            gridrow: ((this.state.index - (this.state.index % 10))/10) + 1,
            gridcol: (this.state.index % 10) + 1,
            status: "stage1",
            newstatus: "stage2"

        }
        console.log(planter)
        axios.post('/api/greenhouse', planter)
            .then(res => console.log(res.data))
    }

    render() {
        let staged = [
            stage1,
            stage2,
            stage3,
            stage4,
            stage5,
            stage6,
            stage7,
            stage8,
            stage9
        ]
        let tileRender
        if (this.state.isBlank){
            tileRender = <img className="stack-tiles" src={blankTile} onMouseOver = {this.blankTileOver} />
        } else if (this.state.isPlace){
            tileRender = <img className="stack-tiles" src={placePot} onMouseOut={this.placePotOut} onClick={this.placeClick} />
        } else if (this.state.stage > 0){
            tileRender = <img className="stack-tiles" src={staged[this.state.stage]} />
        }
        
        return (
            <div>
                <div className="stack">
                    {tileRender}{this.state.index}
                </div>
            </div>
        )
    }
}

export default Tile
