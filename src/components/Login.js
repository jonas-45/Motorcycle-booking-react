import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions';
import './login.css';

const Login = ({ dispatch }) => {
  const [credentials, setCredentials] = useState({ username: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const queryParams = {
    username: credentials.username,
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:3000/api/users/login?${queryString}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isAuthenticated = false;
    try {
      const response = await axios.get(url);
      if (response) {
        isAuthenticated = true;
      }
      if (isAuthenticated) {
        dispatch(login(credentials.username));
        navigate('/motorcycles');
      }
    } catch (error) {
      navigate('/');
    }
  };

  return (
    <div className="main-div">
      <div className="login-div">
        <img src="./logo.png" className="logo" alt="logo" />
        <h1>L O G I N</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
