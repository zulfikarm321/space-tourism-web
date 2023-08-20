import './navbar.scss';

import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import hamIcon from '/shared/icon-hamburger.svg';
import closeIcon from '/shared/icon-close.svg';
import logoIcon from '/shared/logo.svg';

import { NAV_LINKS } from '../lib/data';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logoIcon} alt="logo" />
      </Link>

      <div className="menu-icon" onClick={() => toggleMenu()}>
        {showMenu ? (
          <img src={closeIcon} alt="close icon" />
        ) : (
          <img src={hamIcon} alt="ham icon" />
        )}
      </div>

      <div className="nav-links">
        <div className="bg-blur"></div>
        {NAV_LINKS.map((link, index) => (
          <NavLink className="nav-link" key={index} to={link.hash}>
            <span>0{index}</span> {link.name}
          </NavLink>
        ))}
      </div>
      <div className={`nav-links-dropdown ${showMenu ? 'active' : ''}`}>
        <div className="outer" onClick={() => toggleMenu()}></div>
        <div className="inner">
          <div className="bg-blur"></div>
          <div className="close-icon">
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => toggleMenu()}
            />
          </div>
          {NAV_LINKS.map((link, index) => (
            <NavLink className="nav-link" key={index} to={link.hash}>
              <span>0{index}</span> {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
