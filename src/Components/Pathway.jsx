import React from 'react'
import { Link } from 'react-router-dom'

const Pathway = ({title, blurb, icon, link}) => {
  return (
    <div className='classes-pathway'>
        <Link to={link}>
            <h2>{title}</h2>
            <p>{blurb}</p>
        </Link>
        {icon}
    </div>
  )
}

export default Pathway