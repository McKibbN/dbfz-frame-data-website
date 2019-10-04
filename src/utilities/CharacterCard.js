import React from 'react'
import CharImg from './assets/16Card.png'

function CharacterCard () {
  return (
    <div className='charCardContain'>
      <img className='charImg' src={CharImg} />
      <div className='charNameContain'>
        <h4 className='charName'>Android 16</h4>
      </div>
    </div>
  )
}

export default CharacterCard
