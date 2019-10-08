import React from 'react'
import CharImg from '../assets/16Card.png'

  class CharacterCard extends React.Component {
    constructor() {
      super()
      this.state = {
        charName: 'Android 16'
      }
    }

    render () {
      return (
        <div className='charCardContain'>
          <img className='charImg' src={CharImg} alt='character'/>
          <div className='charNameContain'>
            <h4 className='charName'>{this.state.charName}</h4>
          </div>
        </div>
      )}
    }

export default CharacterCard
