import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navbar.css';
import SignoutButton from './SignoutButton';

const Navbar = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    // Add active-link class based on the current location
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach((item) => item.classList.remove('active-link'));

    if (location.pathname === '/motorcycles') {
      document.querySelector('.motorcycle-li').classList.add('active-link');
    } else if (location.pathname === '/reserve') {
      document.querySelector('.reserve-li').classList.add('active-link');
    } else if (location.pathname === '/reservations') {
      document.querySelector('.reservation-li').classList.add('active-link');
    } else if (location.pathname === '/add-motorcycle') {
      document.querySelector('.add-motorcycle-li').classList.add('active-link');
    } else if (location.pathname === '/delete-motorcycle') {
      document
        .querySelector('.delete-motorcycle-li')
        .classList.add('active-link');
    }
  }, [location]);

  return (
    <nav className={`navbar ${menuVisible ? 'active' : ''}`}>
      <button
        type="button"
        className={`hamburger ${menuVisible ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>
      <ul className={`nav-list ${menuVisible ? 'active' : ''}`}>
        <li className="logo-li">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="logo" alt="logo" />
        </li>
        <li className="motorcycle-li">
          <NavLink to="/motorcycles" className="link">
            MOTORCYCLES
          </NavLink>
        </li>
        <li className="reservation-li">
          <NavLink to="/reservations" className="link">
            MY RESERVATIONS
          </NavLink>
        </li>
        <li className="add-motorcycle-li">
          <NavLink to="/add-motorcycle" className="link">
            ADD MOTORCYCLE
          </NavLink>
        </li>
        <li className="delete-motorcycle-li">
          <NavLink to="/delete-motorcycle" className="link">
            DELETE MOTORCYCLE
          </NavLink>
        </li>
        <li>
          <SignoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
