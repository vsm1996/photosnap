import React from 'react'
import ContentSection from '../home-content-section/ContentSection';

import './homecontent.css'

const HomeContent = () => {

  const content = [
    {
      heading: 'Create And Share Your Photo Stories.',
      text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
      img: 'createnshare',
      position: 'initial',
      fc: 'font-white',
      bg: 'bg-black',
      fill: 'white'
    },
    {
      heading: 'BEAUTIFUL STORIES EVERY TIME',
      text: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      img: 'beautifulstories',
      position: 'row-reverse',
      fc: 'font-black',
      bg: 'bg-white',
      fill: 'black'
    },
    {
      heading: 'DESIGNED FOR EVERYONE',
      text: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
      img: 'desgin4everyone',
      position: 'third',
      fc: 'font-black',
      bg: 'bg-white',
      fill: 'black'
    }
  ]
  return (
    <div className="home__content-container">
      {content.map((content, index) => <ContentSection key={index} content={content} />)}
    </div>
  )
}

export default HomeContent
