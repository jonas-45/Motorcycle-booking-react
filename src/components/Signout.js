// Signout.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Signout() {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignout = () => {
    // Add logic for signing out here
    // For example, you can clear user tokens or cookies

    // After signing out, navigate to another page (e.g., the login page)
    navigate('/');
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <p>Click the button below to sign out.</p>
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}

export default Signout;
