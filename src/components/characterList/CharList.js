import React from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard.js'

function CharList () {
  return (
    <div className='scrollContain'>
      <Link to='/moveList'>
        <CharacterCard />
      </Link>
    </div>
  )
}

export default CharList
