import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import Motorcycles from './Motorcycles';
import Reserve from './Reserve';
import Reservations from './Reservations';
import AddMotorcycle from './AddMotorcycle';
import DeleteMotorcycle from './DeleteMotorcycle';
import { connect } from 'react-redux';
import './navbar.css';
import SignoutButton from './SignoutButton';

const Navbar = ({ isAuthenticated}) => {
  return ( // Add a return statement to return JSX
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
        <li>
          <NavLink to="/motorcycles" className="link" activeClassName="active-link">
            MOTORCYCLES
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserve" className="link" activeClassName="active-link">
            RESERVE
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className="link" activeClassName="active-link">
            MY RESERVATIONS
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-motorcycle" className="link" activeClassName="active-link">
            ADD MOTORCYCLE
          </NavLink>
        </li>
        <li>
          <NavLink to="/delete-motorcycle" className="link" activeClassName="active-link">
            DELETE MOTORCYCLE
          </NavLink>
        </li>
      </ul>
      <Outlet />
      {isAuthenticated && <SignoutButton />}
      <Routes>
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
      </Routes>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  username: state.username,
});

export default connect(mapStateToProps)(Navbar);
