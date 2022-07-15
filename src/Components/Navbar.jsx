import React from 'react'
import '../Styles/Navbar.css';
import SynergyLogo from '../Images/SynergyLogo.svg';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
          <div className="navbar-logo-and-title">
              <img src={SynergyLogo} className="navbar-logo" alt="Synergy Logo"/>
              <p className="navbar-title">SYNERGY CENTER FOR DANCE</p>
          </div>
          
          <ul className="navbar-links">
              <li className="link">
                <a>Home</a>
              </li>
              <li className="link">Classes</li>
              <li className="link">Events</li>
              <li className="link">Programs</li>
              <li className="link">Resources</li>
              <li className="link">About</li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar