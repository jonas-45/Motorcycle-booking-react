import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './components/Login';
import Motorcycles from './components/Motorcycles';
import DeleteMotorcycle from './components/DeleteMotorcycle';
import Reserve from './components/Reserve';
import Reservations from './components/Reservations';
import AddMotorcycle from './components/AddMotorcyclePage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        {' '}
        <Route path="/home/*" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/motorcycles/*" element={<Motorcycles />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
      </Routes>
    </Router>
  );
}

export default App;
