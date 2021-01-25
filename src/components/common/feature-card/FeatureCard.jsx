import React from 'react'

import './featurecard.css'
const FeatureCard = ({ card }) => {
  const { title, text, svg } = card
  return (
    <div className="feature-card">
      <div className={`feature-card__svg ${svg}`}></div>
      <h3 className="feature-card__title"> {title} </h3>
      <p className="feature-card__text"> {text} </p>
    </div>
  )
}

export default FeatureCard
