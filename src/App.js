import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './components/Login';
import Home from './components/Home';
import Signout from './components/Signout';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </Router>
  );
}

export default App;
