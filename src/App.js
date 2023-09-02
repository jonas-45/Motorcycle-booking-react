import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ username: ''});

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
    } catch (error) {
      console.log('No such user');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
