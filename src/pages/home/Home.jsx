import React from 'react'
import HomeContent from '../../components/home-content/HomeContent';
import HomeCards from '../../components/home-cards/HomeCards';
import HomeFeatures from '../../components/home-features/HomeFeatures';

import './home.css'

const Home = () => {
  return (
    <div className="home">
      <HomeContent />
      <HomeCards />
      <HomeFeatures />
    </div>
  )
}

export default Home
