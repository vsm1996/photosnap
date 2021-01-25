import React from 'react'
import { Link } from 'react-router-dom';
import CreateNShare from '../../assets/home/desktop/create-and-share.jpg'
import BeautifulStories from '../../assets/home/desktop/beautiful-stories.jpg'
import Designed4Everyone from '../../assets/home/desktop/designed-for-everyone.jpg'
import { ReactComponent as Arrow } from '../../assets/shared/desktop/arrow.svg'

import './homecontent.css'
const HomeContent = () => {
  return (
    <div className="home__content-container">
      <section className="home__content bg-black font-white">
        <div className="home__content-first">
          <h1 className="home__content-header">Create And Share Your Photo Stories.</h1>
          <p className="home__content-paragraph">
            Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
        </p>
          <Link to='/' className="home__content-link font-white">
            <span className="home__link-span home__link-span1">Get an invite</span>
            <Arrow fill="white" />
          </Link>
        </div>
        <div className="home__img-container1">
          <img src={CreateNShare} alt="create and share" className="home__img" />
        </div>
      </section >

      <section className="home__content row-reverse bg-white font-black">
        <div className="home__content-second">
          <h1 className="home__content-header">BEAUTIFUL STORIES EVERY TIME</h1>
          <p className="home__content-paragraph">
            We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
        </p>
          <Link to='/' className="home__content-link  font-black">
            <span className="home__link-span home__link-span2">View the stories</span>
            <Arrow fill="black" />
          </Link>
        </div>
        <div className="home__img-container2">
          <img src={BeautifulStories} alt="create and share" className="home__img" />
        </div>
      </section>

      <section className="home__content bg-white font-black">
        <div className="home__content-second">
          <h1 className="home__content-header">DESIGNED FOR EVERYONE</h1>
          <p className="home__content-paragraph">
            Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.
        </p>
          <Link to='/' className="home__content-link home__content-link2 font-black">
            <span className="home__link-span home__link-span2">Get an invite</span>
            <Arrow fill="black" />
          </Link>
        </div>
        <div className="home__img-container2">
          <img src={Designed4Everyone} alt="create and share" className="home__img" />
        </div>
      </section>
    </div>
  )
}

export default HomeContent
