import React from 'react'
import MoveImg from '../assets/FiveL.png'

  class MoveCard extends React.Component {
    constructor() {
      super()
      this.state = {
        moveName: 'Stand Light',
        moveNotation: '5L'
      }
    }

    render () {
      return (
        <div className='moveCardContain'>
        <img className='moveImg' src={MoveImg} alt='Move'/>
          <div className='moveTextBox'>
            <h4 className='moveName'>{this.state.moveName}</h4>
            <h4 className='moveNotation'>{this.state.moveNotation}</h4>
          </div>
        </div>
      )
    }
  }

export default MoveCard
