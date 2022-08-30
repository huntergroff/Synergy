import React from 'react'
import { Link } from 'react-router-dom'

//CSS
import '../../Styles/ComingSoon.css'

const NotFound = () => {
  return (
    <div className='coming-soon'>
        <h1>It looks like this page doesn't exist!</h1>
        <p>Sorry for any inconvenience! Our website is currently under construction, so we may be having an error with this page, or perhaps it never existed in the first place. Please drop us an email with your feedback, or return home using the button below!</p>
        <Link to="/">Return Home</Link>
    </div>
  )
}

export default NotFound