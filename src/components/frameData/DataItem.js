import React from 'react'

class DataItem extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (
      <div className='item'>
        <h4 className='dataType'>{this.props.dataType}</h4>
        <h4 className='dataVar'>{this.props.data}</h4>
      </div>
    )
  }
}

export default DataItem
