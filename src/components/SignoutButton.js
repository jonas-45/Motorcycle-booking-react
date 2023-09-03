// SignoutButton.js
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions'; // Import your logout action

const SignoutButton = ({ dispatch }) => {
  const handleSignout = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    // You may also want to perform any additional signout logic here, such as clearing user data from localStorage or sending a signout request to your server.
  };

  return (
    <button onClick={handleSignout}>Signout</button>
  );
};

export default connect()(SignoutButton);
