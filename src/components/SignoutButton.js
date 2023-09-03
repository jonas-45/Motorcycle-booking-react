// SignoutButton.js
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const SignoutButton = ({ dispatch }) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    navigate('/');
  };

  return (
    <button onClick={handleSignout}>Signout</button>
  );
};

export default connect()(SignoutButton);
