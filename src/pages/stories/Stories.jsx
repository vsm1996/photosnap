import React from 'react'
import StoriesHeader from '../../components/stories-header/StoriesHeader';
import StoryCard from '../../components/common/story-card/StoryCard';

import './stories.css'

const Stories = () => {
  const cards = [
    {
      title: 'The Mountains',
      author: 'John Appleseed',
      date: 'April 16th 2020',
      bg: 'mountains'
    },
    {
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      date: 'April 14th 2020',
      bg: 'cityscapes'
    },
    {
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      date: 'April 11th 2020',
      bg: 'days-voyage'
    },
    {
      title: 'Architecturals',
      author: 'Samantha Brooke',
      date: 'April 9th 2020',
      bg: 'architecturals'
    },
    {
      title: 'World Tour 2019',
      author: 'Timothy Wagner',
      date: 'April 7th 2020',
      bg: 'world-tour'
    },
    {
      title: 'Unforeseen Corners',
      author: 'William Malcolm',
      date: 'April 3rd 2020',
      bg: 'unforeseen-corners'
    },
    {
      title: 'King on Africa: Part II',
      author: 'Tim Hillenburg',
      date: 'March 29th 2020',
      bg: 'king-on-africa'
    },
    {
      title: 'King on Africa: Part II',
      author: 'Felicia Rourke',
      date: 'March 21st 2020',
      bg: 'trip-to-nowhere'
    },
    {
      title: 'Rage of The Sea',
      author: 'Mohammed Abdul',
      date: 'March 19th 2020',
      bg: 'rage-of-the-sea'
    },
    {
      title: 'Running Free',
      author: 'Michelle',
      date: 'March 16th 2020',
      bg: 'running-free'
    },
    {
      title: 'Behind the Waves',
      author: 'Lamarr Wilson',
      date: 'March 11th 2020',
      bg: 'behind-the-waves'
    },
    {
      title: 'Calm Waters',
      author: 'Lamarr Wilson',
      date: 'March 9th 2020',
      bg: 'calm-waters'
    },
    {
      title: 'The Milky Way',
      author: 'Benjamin Cruz',
      date: 'March 5th 2020',
      bg: 'milky-way'
    },
    {
      title: 'Night at The Dark Forest',
      author: 'Mohammed Abdul',
      date: 'March 4th 2020',
      bg: 'dark-forest'
    },
    {
      title: 'Somwarpet\'s Beauty',
      author: 'Michelle',
      date: 'March 4th 2020',
      bg: 'somwarpet'
    },
    {
      title: 'Land of Dreams',
      author: 'William Malcolm',
      date: 'February 25th 2020',
      bg: 'land-of-dreams'
    },
  ]
  return (
    <div className="stories">
      <StoriesHeader />
      <div className="home__cards">

        {cards.map((card, index) => <StoryCard key={index} card={card} />)}
      </div>
    </div>
  )
}

export default Stories
