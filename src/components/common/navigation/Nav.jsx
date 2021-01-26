import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo';
import { ReactComponent as MenuIcon } from '../../../assets/shared/mobile/menu.svg'

import './nav.css'

const Nav = () => {

  return (
    <nav className='nav'>
      <Logo fill="black" />
      <ul className='nav__list'>
        <li className="nav__list-item">
          <Link to='/stories' className="nav__list-item-link">Stories</Link></li>
        <li className="nav__list-item">
          <Link to='/features' className="nav__list-item-link">Features</Link>
        </li>
        <li className="nav__list-item">
          <Link to='/pricing' className="nav__list-item-link">Pricing</Link>
        </li>
      </ul>
      <Link to='/' className="nav__link"> Get An Invite </Link>
      <MenuIcon className="menu-icon" />
    </nav>
  )
}

export default Nav
