import React from 'react'
import FeatureCard from '../common/feature-card/FeatureCard'

import './homefeatures.css'
const HomeFeatures = () => {
  const cards = [
    {
      title: '100% Responsive',
      text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
      svg: 'responsive'
    },
    {
      title: 'No Photo Upload Limit',
      text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
      svg: 'no-limit'
    },
    {
      title: 'Available to Embed',
      text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
      svg: 'embed'
    },
  ]
  return (
    <div className="home-features">
      {cards.map((card, index) => <FeatureCard key={index} card={card} />)}
    </div>
  )
}

export default HomeFeatures
