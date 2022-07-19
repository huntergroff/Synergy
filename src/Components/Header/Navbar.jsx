import React from 'react'
import '../../Styles/Navbar.css';
import { MenuItems } from './MenuItems.js';
import SynergyLogo from '../../Images/SynergyLogo.svg';
import MenuLink from './MenuLink';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <a href="/" className='navbar-logo-and-title'>
            <img src={SynergyLogo} className="navbar-logo" alt="Synergy Logo"/>
            <p className="navbar-title">SYNERGY CENTER FOR DANCE</p>
        </a>
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