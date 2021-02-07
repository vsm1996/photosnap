import React from 'react'
import { Link } from 'react-router-dom'

import './pricingcard.css'
const PricingCard = ({ card }) => {
  const { center, tier, text, monthlyPrice, yearlyPrice, time } = card
  return (
    <div className={center ? 'card-mid' : 'card-initial'}>
      <h2 className="card__tier">{tier}</h2>
      <p className={center ? 'card__text-mid' : 'card__text-init'}>{text}</p>

      <h2 className="card__price"> ${time ? yearlyPrice : monthlyPrice}.00 <small className={center ? 'card__time-mid' : 'card__time-init'}>per {time ? 'year' : 'month'}</small></h2>
      <Link to='/' className={center ? 'pricing-card__link-mid' : 'pricing-card__link-init'}> Pick Plan </Link>
    </div>
  )
}

export default PricingCard
