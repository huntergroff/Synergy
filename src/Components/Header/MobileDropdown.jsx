import React from 'react'
import MobileMenuLink from './MobileMenuLink';

const MobileDropdown = ({ submenus, isOpen, toggleMenu }) => {
 return (
        <ul className={`mobile-dropdown ${isOpen ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MobileMenuLink menu={submenu} key={index} toggleMenu={toggleMenu}/>
            ))}
        </ul>
 );
};

export default MobileDropdown;