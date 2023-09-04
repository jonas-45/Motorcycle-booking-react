import {
  NavLink, Outlet, useLocation,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './navbar.css';
import SignoutButton from './SignoutButton';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/motorcycles') {
      const div = document.querySelector('.motorcycle-li');
      div.classList.add('active-link');
    }
    if (location.pathname === '/reserve') {
      const div = document.querySelector('.reserve-li');
      div.classList.add('active-link');
    }
    if (location.pathname === '/reservation') {
      const div = document.querySelector('.reservation-li');
      div.classList.add('active-link');
    }
    if (location.pathname === '/add-motorcycle') {
      const div = document.querySelector('.add-motorcycle-li');
      div.classList.add('active-link');
    }
    if (location.pathname === '/delete-motorcycle') {
      const div = document.querySelector('.delete-motorcycle-li');
      div.classList.add('active-link');
    }
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="logo-li">
          <img src="./logo.png" className="logo" alt="logo" />
        </li>
        <li className="home-li">
          <NavLink to="/home">
            <img className="home-link" src="./home.png" alt="home-link" />
          </NavLink>
        </li>
        <li className="motorcycle-li">
          <NavLink to="/motorcycles" className="link">
            MOTORCYCLES
          </NavLink>
        </li>
        <li className="reserve-li">
          <NavLink to="/reserve" className="link">
            RESERVE
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
      <Outlet />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username,
});

export default connect(mapStateToProps)(Navbar);
