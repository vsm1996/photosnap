import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg'

import './storiesheader.css'
const StoriesHeader = () => {
  return (
    <div className="stories__header-container">
      <div className="stories__header">
        <h4 className="stories__featured-tag">Last month's featured story</h4>
        <h1 className="stories__featured-title">Hazy full moon of Appalachia</h1>
        <small className="stories__featured-info">March 2nd 2020 <span className="stories__featured-author">by John Appleseed</span></small>
        <p className="stories__featured-text">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        <Link to="/" className="stories__featured-link">
          <span className="stories__featured-link-span"> Read the story </span>
          <Arrow fill="white" />
        </Link>
      </div>
    </div>
  )
}

export default StoriesHeader
