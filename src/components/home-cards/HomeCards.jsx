import React from 'react'
import StoryCard from '../common/story-card/StoryCard';

import './homecards.css'
const HomeCards = () => {
  const cards = [
    {
      title: 'The Mountains',
      author: 'John Appleseed',
      bg: 'mountains'
    },
    {
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      bg: 'cityscapes'
    },
    {
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      bg: 'days-voyage'
    },
    {
      title: 'Architecturals',
      author: 'Samantha Brooke',
      bg: 'architecturals'
    },
  ]

  return (
    <div className="home__cards">
      {cards.map((card, index) => <StoryCard key={index} card={card} />)}
    </div>
  )
}

export default HomeCards
