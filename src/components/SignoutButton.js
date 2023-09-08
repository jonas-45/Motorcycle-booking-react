// SignoutButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions';

const SignoutButton = ({ dispatch }) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    navigate('/');
  };

  return (
    <button type="button" onClick={handleSignout}>Signout</button>
  );
};

SignoutButton.propTypes = {
  dispatch: PropTypes.func.isRequired, // Define the prop type for dispatch
};

export default connect()(SignoutButton);
