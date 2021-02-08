import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo';
import { ReactComponent as MenuOpen } from '../../../assets/shared/mobile/menu.svg'
import { ReactComponent as MenuClose } from '../../../assets/shared/mobile/close.svg'

import './nav.css'

const Nav = () => {

  const [show, setDisplay] = useState(false)

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
      <MenuOpen className={show === true ? 'hide' : 'menu-icon show'} onClick={() => setDisplay(!show)} />
      <MenuClose className={show === true ? 'menu-icon show' : 'hide'} onClick={() => setDisplay(!show)} />

      <div className={show ? 'mobile-nav__modal show-modal' : 'mobile-nav__modal hide'}>
        <ul className='mobile-nav__list'>
          <li className="mobile-nav__list-item">
            <Link to='/stories' className="nav__list-item-link">Stories</Link></li>
          <li className="mobile-nav__list-item">
            <Link to='/features' className="nav__list-item-link">Features</Link>
          </li>
          <li className="mobile-nav__list-item">
            <Link to='/pricing' className="nav__list-item-link">Pricing</Link>
          </li>
        </ul>

        <div className="hr-nav"></div>

        <Link to='/' className="mobile-nav__link"> Get An Invite </Link>
      </div>
    </nav>
  )
}

export default Nav
