// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './home.css';

function Home() {
  return (
    <div className="home-div">
      <Navbar />
      <img src="./giphy.gif" className="rider-img" alt="bike rider" />
    </div>
  );
}

export default Home;
