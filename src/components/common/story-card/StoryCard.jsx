import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../../assets/shared/desktop/arrow.svg'

import './storycard.css'
const StoryCard = ({ card }) => {
  const { title, author, date, bg } = card
  return (
    <div className={`story-card ${bg}`}>
      <div className="story-card__content">
        <small className="story-card__photographer">{date ? date : null}</small>
        <h3 className="story-card__title">
          {title}
        </h3>
        <small className="story-card__photographer">by {author}</small>
        <span className="hr"></span>
        <Link to='/' className="home__content-link home__content-link2 font-white">
          <span className="home__link-span home__link-span1">Read Story</span>
          <Arrow fill="white" />
        </Link>
      </div>
    </div>
  )
}

export default StoryCard
