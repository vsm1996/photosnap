import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg'

import './contentsection.css'
const ContentSection = ({ content }) => {
  const { heading, text, img, position, fc, bg, fill } = content
  return (
    <section className={`home__content ${position} ${fc} ${bg}`}>
      <div className={position === 'initial' ? "home__content-first" : 'home__content-second'}>
        <h1 className="home__content-header">{heading}</h1>
        <p className="home__content-paragraph">
          {text}
        </p>
        <Link to='/' className={`home__content-link ${fc}`}>
          <span className={fc === 'font-white' ? "home__link-span home__link-span1" : "home__link-span home__link-span2"}>Get an invite</span>
          <Arrow fill={fill} />
        </Link>
      </div>
      <div className={`home__img-container ${img}`}>
      </div>
    </section >
  )
}

export default ContentSection
