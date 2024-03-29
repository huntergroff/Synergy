//React Imports
import React from 'react'

//Other Components
import MenuLink from './MenuLink';

const Dropdown = ({ submenus, isOpen, depthLevel, isLastHeader }) => {
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    const openClass = isOpen ? "show" : "";
 return (
        <ul className={`navbar-dropdown ${dropdownClass} ${openClass} ${isLastHeader ? 'last-header' : ''}`}>
            {submenus.map((submenu, index) => (
                <MenuLink menu={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
 );
};

export default Dropdown;