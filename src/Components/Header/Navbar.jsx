//React Imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Icons and Images
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import SynergyLogo from '../../Images/SynergyLogo.js'

//CSS
import '../../Styles/Navbar.css';

//Imports for automatic menu generation
import { MenuItems } from './MenuItems.js'
import MenuLink from './MenuLink.jsx'
import MobileMenuLink from './MobileMenuLink.jsx';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header>
      <div className='navbar'>
        <div className='navbar-logo-and-title'>
          <Link to="/" >
            <SynergyLogo fill="#008080" />
            <p className="navbar-title">SYNERGY CENTER FOR DANCE</p>
          </Link>
        </div>
        <nav>
          <ul className="navbar-menus">
          {MenuItems.map((menu, index, MenuItems) => {
            const depthLevel = 0;
            return (
                <MenuLink menu={menu} key={index} depthLevel={depthLevel} isLastHeader={(index + 1 === MenuItems.length)} />
            );
          })}
          </ul>
        </nav>
        <div onClick={toggleMobileMenu} className='mobile-menu-open-close'>
          {mobileMenuOpen ? <AiOutlineClose className='mobile-hamburger' /> : <AiOutlineMenu className='mobile-hamburger' /> }
        </div>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
        <ul className='mobile-menu-links'>
          {MenuItems.map((menu, index) => {
            return (
                <MobileMenuLink menu={menu} key={index} toggleMenu={toggleMobileMenu}/>
            );
          })}
        </ul>
      </div>
    </header>
  )
}

export default Navbar