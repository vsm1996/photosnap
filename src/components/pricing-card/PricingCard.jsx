import React from 'react'

import './pricingcard.css'
const PricingCard = ({ card }) => {
  const { center, tier, text, price, time } = card
  return (
    <div className={center ? 'card-mid' : 'card-initial'}>
      <h2 className="card__tier">{tier}</h2>
      <p className="card__text">{text}</p>
      <h2 className="card__price"> ${price} <small className="card__time">per {time}</small></h2>
    </div>
  )
}

export default PricingCard
