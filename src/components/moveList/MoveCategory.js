import React from 'react'
import MoveCard from './MoveCard.js'

class MoveCategory extends React.Component {
  constructor() {
    super()
    this.state = {
      moveCategory: 'Normals'
    }
  }

  render() {
    return (
      <div>
        <div className='menuCategory'>
          <h2 className='categoryName'>{this.state.moveCategory}</h2>
        </div>
        <MoveCard />
      </div>
    )
  }
}

export default MoveCategory
