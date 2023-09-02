// Home.js
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate('/signout');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Navbar />
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}

export default Home;
