import { NavLink, Routes, Route } from 'react-router-dom';
import Motorcycles from './Motorcycles';
import AddReservation from './AddReservation';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/motorcycles">
          Motorcycles
        </NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/motorcycles" element={<Motorcycles />} />
      <Route path="/reserve" element={<AddReservation />} />
    </Routes>
  </nav>
);

export default Navbar;
