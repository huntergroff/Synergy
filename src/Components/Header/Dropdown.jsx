import React from 'react'
import MenuLink from './MenuLink';

const Dropdown = ({ submenus, isOpen, depthLevel }) => {
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    const openClass = isOpen ? "show" : "";
 return (
        <ul className={`navbar-dropdown ${dropdownClass} ${openClass}`}>
            {submenus.map((submenu, index) => (
                <MenuLink menu={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
 );
};

export default Dropdown;