import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Menu } from './assets/menu.svg';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='headerContain'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <ul className='menuListDesktop'>
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
        <Menu className='menuIcon' onClick={this.props.drawerClickHandle} />
      </div>
    )
  }
}

export default Header
