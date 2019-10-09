import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Cross } from './assets/cross.svg';

class SideDrawer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className='drawerContain'>
          <Cross className='exitMenuIcon' onClick={this.props.drawerClickHandle} />
          <ul className='menuListMobile'>
            <li>
              <h3>About</h3>
            </li>
            <li>
              <h3>FAQ's</h3>
            </li>
            <li>
              <h3>Support</h3>
            </li>
          </ul>
        </div>
        <div className='backdrop' onClick={this.props.drawerClickHandle}></div>
      </div>
    )
  }
}

export default SideDrawer
