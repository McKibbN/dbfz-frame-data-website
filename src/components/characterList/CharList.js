import React from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard.js'

function CharList () {
  return (
    <div className='scrollContain'>
      <Link className='charCardContain' to='/moveList'>
        <CharacterCard />
      </Link>
    </div>
  )
}

export default CharList
