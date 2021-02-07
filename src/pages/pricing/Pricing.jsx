import React, { useState } from 'react'
import Beta from '../../components/common/beta-hero/Beta'
import Header from '../../components/common/header/Header'

import './pricing.css'
import PricingCard from '../../components/pricing-card/PricingCard';
const Pricing = () => {

  const [time, setTime] = useState(false)
  const headerContent = {
    bg: 'pricing',
    heading: 'Pricing',
    text: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
  }

  const cards = [
    {
      center: false,
      tier: 'Basic',
      text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: 19,
      yearlyPrice: 190,
      time
    },
    {
      center: true,
      tier: 'Pro',
      text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: 39,
      yearlyPrice: 390,
      time
    },
    {
      center: false,
      tier: 'Business',
      text: 'Additional features available such as more detailed metrics. Recommended for business owners.',
      monthlyPrice: 99,
      yearlyPrice: 990,
      time
    },
  ]

  return (
    <div>
      <Header header={headerContent} />
      <section className="pricing__section">
        <div className="pricing__section-toggle">
          <span className={time ? 'inactive' : 'active'}>Monthly</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={() => setTime(!time)}></span>
          </label>
          <span className={time ? 'active' : 'inactive'}>Yearly</span>

        </div>

        <div className="pricing__section-cards">
          {cards.map((card, index) => <PricingCard key={index} card={card} />)}
        </div>
      </section>
      <Beta />
    </div>
  )
}

export default Pricing
