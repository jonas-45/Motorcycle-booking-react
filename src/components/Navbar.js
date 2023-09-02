import { NavLink, Routes, Route } from 'react-router-dom';
import Motorcycles from './Motorcycles';

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
    </Routes>
  </nav>
);

export default Navbar;
