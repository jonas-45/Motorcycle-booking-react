// Login.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from './Redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Login = ({ dispatch }) => {
  const [credentials, setCredentials] = useState({ username: '' });
  const navigate = useNavigate(); // Initialize navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const queryParams = {
    username: credentials.username
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:3000/api/users/login?${queryString}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      console.log('User Found');
      // Simulate authentication success
      // In a real application, you would perform actual authentication here
      const isAuthenticated = true;
      if (isAuthenticated) {
        dispatch(login(credentials.username)); // Dispatch the login action
        navigate('/home');
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.log('No such user');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Use 'text' instead of 'username'
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default connect()(Login);
