import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import Motorcycles from './Motorcycles';
import Reserve from './Reserve';
import Reservations from './Reservations';
import AddMotorcycle from './AddMotorcycle';
import DeleteMotorcycle from './DeleteMotorcycle';
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated, username }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/motorcycles">
            Motorcycles
          </NavLink>
        </li>
        <li>
          <NavLink to="/reserve">
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations">
            My Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-motorcycle">
            Add Motorcycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/delete-motorcycle">
            Delete Motorcycle
          </NavLink>
        </li>
      </ul>
      <Outlet /> {/* Use Outlet to render child routes */}
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
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username,
});

export default connect(mapStateToProps)(Navbar);
