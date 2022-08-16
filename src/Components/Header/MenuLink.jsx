//React Imports
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//Other Components
import Dropdown from './Dropdown';

const MenuLink = ({ menu, depthLevel, isLastHeader }) => {
    /** State handler for opening and closing dropdown */
    const [open, setOpen] = useState(false);

    const onMouseEnter = () => {
      setOpen(true);
    };
     
    const onMouseLeave = () => {
     setOpen(false);
    };

    /** If the menu has a submenu, prepare a dropdown component. */
  return (
    <li className={`menu-link ${depthLevel > 0 ? 'navbar-dropdown-item' : 'navbar-header-item'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <NavLink to={menu.link}>{menu.title}</NavLink>
        {menu.submenu ? <Dropdown submenus={menu.submenu} isOpen={open} depthLevel={depthLevel + 1} isLastHeader={isLastHeader}/> : <></>}
    </li>
  )
}

export default MenuLink;