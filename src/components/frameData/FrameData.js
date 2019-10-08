import React from 'react'
import DataCategory from './DataCategory.js'
import MoveImg from '../assets/FiveL.png'

  class FrameData extends React.Component {
    constructor() {
      super()
      this.state = {
        moveNotation: '5L',
        dataCategory: 'General Properties'
      }
    }

    render () {
      return (
        <div className='scrollContain'>
          <div className='imgContain'>
            <img className='dataImg' src={MoveImg} alt='Move'/>
          </div>
          <DataCategory dataCategory={this.state.dataCategory}/>
        </div>
      )
    }
  }

export default FrameData
