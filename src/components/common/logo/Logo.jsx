import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as MainLogo } from '../../../assets/shared/desktop/logo.svg'

import './logo.css'

const Logo = ({ fill }) => {
  return (
    <Link to='/' className="main-logo-container">
      <MainLogo className="main-logo" fill={fill} />
    </Link>
  )
}

export default Logo
