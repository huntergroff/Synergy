import React from 'react'
import { Link } from 'react-router-dom';

const HomeBanner = ({ title, blurb, btnLink, btnText, image, reverse }) => {
  return (
    <div className={`home-banner ${reverse ? 'reverse' : ''}`}>
        <div className='home-banner-content'>
            <img src={image} alt="alt" />
            <div className='banner-info'>
                <h1>{title}</h1>
                <p>{blurb}</p>
                <Link to={btnLink}>{btnText}</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner