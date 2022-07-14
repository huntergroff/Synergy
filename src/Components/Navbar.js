import React from 'react'
import '../Styles/Navbar.css';
import SynergyBox from '../Images/SynergyBox.png';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
        <div className="top-left-logo">
            <img src={SynergyBox} className="App-logo" alt="synergy logo"/>
            <p className="top-left-title">SYNERGY CENTER FOR DANCE</p>
        </div>
        
        <ul className="navbar-links">
            <li>Home</li>
            <li>Classes</li>
            <li>Events</li>
            <li>Programs</li>
            <li>Resources</li>
            <li>About</li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar