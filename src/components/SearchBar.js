import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='searchBarContain'>
        <input type='text' className="searchField" placeholder="Search"/>
      </div>
    )
  }
}

export default SearchBar
