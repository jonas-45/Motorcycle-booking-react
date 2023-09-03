import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './components/Login';
import Signout from './components/Signout';
import Motorcycles from './components/Motorcycles';
import DeleteMotorcycle from './components/DeleteMotorcycle';

function App() {
  return (
    <Router>
      <Routes>
        {' '}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<Login />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </Router>
  );
}

export default App;
