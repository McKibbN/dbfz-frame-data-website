import React from 'react'
import DataItem from './DataItem.js'

  class DataCategory extends React.Component {
    constructor() {
      super()
      this.state = {
        dataType: 'StartUp',
        data: '6'
      }
    }

    render () {
      return (
        <div>
          <div className='dataCategory'>
            <h3 className='dataCategoryName'>{this.props.dataCategory}</h3>
          </div>
          <DataItem dataType={this.state.dataType} data={this.state.data}/>
          <DataItem dataType={this.state.dataType} data={this.state.data}/>
          <DataItem dataType={this.state.dataType} data={this.state.data}/>
        </div>
      )
    }
  }

export default DataCategory
