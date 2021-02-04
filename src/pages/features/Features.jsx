import React from 'react'
import Header from '../../components/common/header/Header'
import FeatureCard from '../../components/common/feature-card/FeatureCard'
import Beta from '../../components/common/beta-hero/Beta'

import './features.css'

const Features = () => {
  const headerContent = {
    bg: 'features',
    heading: 'Features',
    text: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
  }


  const features = [
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
      text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
      svg: 'embed'
    },
    {
      title: 'Custom Domain',
      text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
      svg: 'responsive'
    },
    {
      title: 'Boost Your Exposure',
      text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
      svg: 'no-limit'
    },
    {
      title: 'Drag & Drop Image',
      text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
      svg: 'embed'
    },
  ]

  return (
    <div>
      <Header header={headerContent} />
      <div className="features__cards">
        {features.map((feature, index) => <FeatureCard key={index} card={feature} />)}
      </div>
      <Beta />
    </div>
  )
}

export default Features
