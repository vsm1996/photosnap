import React from 'react'

import './header.css'

const Header = ({ header }) => {
  const { bg, heading, text } = header;
  return (
    <div className="header__container">
      <div className="header">
        <h1 className="header__heading"> {heading} </h1>
        <p className="header__text">{text}</p>
      </div>
      <div className={bg}></div>
    </div>
  )
}

export default Header
