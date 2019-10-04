import React from 'react'
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Menu } from './assets/menu.svg';

function Header () {
  return (
    <div className='headerContain'>
      <Logo className='logo'/>
      <Menu className='menu'/>
    </div>
  )
}

export default Header
