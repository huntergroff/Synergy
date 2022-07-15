import React from 'react'
import '../Styles/Navbar.css';
import {MenuItems} from './MenuItems.js';
import SynergyLogo from '../Images/SynergyLogo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/" className='navbar-logo-and-title'>
            <img src={SynergyLogo} className="navbar-logo" alt="Synergy Logo"/>
            <p className="navbar-title">SYNERGY CENTER FOR DANCE</p>
        </a>
      
        <ul className="navbar-links">
          {MenuItems.map((menu, index) => {
            return (
                <NavLink className="link" to={menu.link}>{menu.title}</NavLink>
            );
          })}
        </ul>
    </nav>
  )
}

export default Navbar