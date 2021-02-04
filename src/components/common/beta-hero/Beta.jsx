import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/shared/desktop/arrow.svg'

import './beta.css'
const Beta = () => {
  return (
    <section className="beta__container">
      <div className="beta">
        <h2 className="beta__heading">
          We’re in beta. <br />
          Get your invite today!
        </h2>
        <Link to="/" className="beta__link">
          <span className="beta__link-span"> Get an invite </span>
          <Arrow fill="white" />
        </Link>
      </div>
    </section>
  )
}

export default Beta
