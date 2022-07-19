import React from 'react'
import '../../Styles/Navbar.css';
import { MenuItems } from './MenuItems.js';
import SynergyLogo from '../../Images/SynergyLogo.svg';
import MenuLink from './MenuLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <div className='navbar-logo-and-title'>
          <Link to="/" >
            <img src={SynergyLogo} className="navbar-logo" alt="Synergy Logo"/>
            <p className="navbar-title">SYNERGY CENTER FOR DANCE</p>
          </Link>
        </div>
        <nav>
          <ul className="navbar-menus">
          {MenuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
                <MenuLink menu={menu} key={index} depthLevel={depthLevel} />
            );
          })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar