import { NavLink, Routes, Route } from 'react-router-dom';
import Motorcycles from './Motorcycles';
import Reserve from './Reserve';
import Reservations from './Reservations';
import AddMotorcycle from './AddMotorcycle';
import DeleteMotorcycle from './DeleteMotorcycle';

const Navbar = () => (
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
    <Routes>
      <Route path="/motorcycles" element={<Motorcycles />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/add-motorcycle" element={<AddMotorcycle />} />
      <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
    </Routes>
  </nav>
);

export default Navbar;
