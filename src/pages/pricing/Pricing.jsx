import React from 'react'
import Beta from '../../components/common/beta-hero/Beta'
import Header from '../../components/common/header/Header'

import './pricing.css'
import PricingCard from '../../components/pricing-card/PricingCard';
const Pricing = () => {
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
      price: 19.00,
    },
    {
      center: true,
      tier: 'Pro',
      text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      price: 39.00,
    },
    {
      center: false,
      tier: 'Business',
      text: 'Additional features available such as more detailed metrics. Recommended for business owners.',
      price: 99.00,
    },
  ]
  return (
    <div>
      <Header header={headerContent} />
      <section className="pricing__section">
        {cards.map((card, index) => <PricingCard key={index} card={card} />)}
      </section>
      <Beta />
    </div>
  )
}

export default Pricing
