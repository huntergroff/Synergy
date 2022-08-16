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

  return (
      <li className='link'>
        {menu.submenu ? 
          <>
            <div className='dropdown-item'onClick={toggleOpen}>
              <span>{menu.title}</span>
              <BiChevronDown className={`arrow ${open ? 'open' : ''}`}/>
              </div>
            <MobileDropdown submenus={menu.submenu} isOpen={open} toggleMenu={toggleMenu}/>
          </>
          : 
          <Link to={menu.link} onClick={toggleMenu}>{menu.title}</Link>
        }
      </li>
  )
}

export default MobileMenuLink;