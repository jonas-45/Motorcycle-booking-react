// Home.js
import React from 'react';
import Navbar from './Navbar';
import './home.css';

function Home() {
  return (
    <div class="home-div">
      <Navbar />
      <img src="./giphy.gif" className="rider-img" alt="bike rider" />
    </div>
  );
}

export default Home;
