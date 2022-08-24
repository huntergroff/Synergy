import React from 'react'
import { Link } from 'react-router-dom'

//CSS
import '../../Styles/ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className='coming-soon'>
        <h1>This page is coming soon!</h1>
        <p>Our new website is still under construction. Please check back soon for updates. Thanks for your patience!</p>
        <Link to="/">Return Home</Link>
    </div>
  )
}

export default ComingSoon