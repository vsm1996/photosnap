import React from 'react'
import StoriesHeader from '../../components/stories-header/StoriesHeader';

import './stories.css'

const Stories = () => {
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
    <div className="stories">
      <StoriesHeader />
    </div>
  )
}

export default Stories
