import React, { useState } from "react";

export default function Registration(){
  const [name, setName] = useState('');
  const [username, setUsername] = useState('')

  const styles = {
    backgroundCcolor: '#F8F9FA',
    borderRadius: '25px'
  }

  const handleSubmit = () => {

  }
  return (
    <section className="vh-100" style={styles}>
      <div className="container h-100">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.setName)} required />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.setUsername)} required />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  )
}