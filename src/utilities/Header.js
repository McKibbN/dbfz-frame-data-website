import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Menu } from './assets/menu.svg';

function Header () {
  return (
    <div className='headerContain'>
      <Link to='/'>
        <Logo className='logo'/>
      </Link>
      <Menu className='menu'/>
    </div>
  )
}

export default Header
