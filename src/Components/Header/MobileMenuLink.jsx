//React Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Icons and Images
import { BiChevronDown } from 'react-icons/bi';

//Other Components
import MobileDropdown from './MobileDropdown';

const MobileMenuLink = ({ menu, toggleMenu }) => {
  /** State handler for opening and closing dropdown */
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  let menuListItem;

  /** If the menu has a submenu,  create dropdown with arrow */
  if (menu.submenu) {
    menuListItem = (
      <>
        <div className='dropdown-item'onClick={toggleOpen}>
          <span>{menu.title}</span>
          <BiChevronDown className={`arrow ${open ? 'open' : ''}`}/>
          </div>
        <MobileDropdown submenus={menu.submenu} isOpen={open} toggleMenu={toggleMenu}/>
      </>
    )
  /** else if the menu is an external link, create an a tag to the external site */
  } else if (menu.external) {
    menuListItem = (
      <a href={menu.link} target="_blank" rel="noreferrer">{menu.title}</a>
    )

  /** else if the menu has an internal link, render a Link to that page of the site */
  } else {
    menuListItem = (
      <Link to={menu.link} onClick={toggleMenu}>{menu.title}</Link>
    )  
  }

  return (
      <li className='link'>
        {menuListItem}
      </li>
  )
}

export default MobileMenuLink;