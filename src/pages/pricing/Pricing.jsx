import React from 'react'
import Beta from '../../components/common/beta-hero/Beta'
import Header from '../../components/common/header/Header'

import './pricing.css'
const Pricing = () => {
  const headerContent = {
    bg: 'pricing',
    heading: 'Pricing',
    text: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
  }
  return (
    <div>
      <Header header={headerContent} />
      <section className="pricing__section">

      </section>
      <Beta />
    </div>
  )
}

export default Pricing
