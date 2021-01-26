import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo'

import { ReactComponent as FacebookIcon } from '../../../assets/shared/desktop/facebook.svg'
import { ReactComponent as YoutubeIcon } from '../../../assets/shared/desktop/youtube.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/shared/desktop/twitter.svg'
import { ReactComponent as PinterestIcon } from '../../../assets/shared/desktop/pinterest.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/shared/desktop/instagram.svg'
import { ReactComponent as Arrow } from '../../../assets/shared/desktop/arrow.svg'

import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <Logo fill="white" />
        <ul className="footer__anchor-list">
          <li className="footer__anchor-item">
            <Link to="/" className="footer__anchor-link">Home</Link>
          </li>
          <li className="footer__anchor-item">
            <Link to="/stories" className="footer__anchor-link">Stories</Link>
          </li>
          <li className="footer__anchor-item">
            <Link to="/features" className="footer__anchor-link">Features</Link>
          </li>
          <li className="footer__anchor-item">
            <Link to="/pricing" className="footer__anchor-link">Pricing</Link>
          </li>
        </ul>

        <ul className="footer__social-list">
          <li className="footer__social-item">
            <FacebookIcon fill="currentColor" className="footer__social-icon" />
          </li>
          <li className="footer__social-item">
            <YoutubeIcon fill="currentColor" className="footer__social-icon" />
          </li>
          <li className="footer__social-item">
            <TwitterIcon fill="currentColor" className="footer__social-icon" />
          </li>
          <li className="footer__social-item">
            <PinterestIcon fill="currentColor" className="footer__social-icon" />
          </li>
          <li className="footer__social-item">
            <InstagramIcon fill="currentColor" className="footer__social-icon" />
          </li>
        </ul>
      </div>
      <div className="right">
        <Link to='/' className="home__content-link home__content-link2 font-white">
          <span className="home__link-span home__link-span1">Get an invite</span>
          <Arrow fill="white" />
        </Link>
        <small className="footer__copyright">Copyright 2019. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
