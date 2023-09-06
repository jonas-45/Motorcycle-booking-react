import React, { useState, useEffect } from 'react';
import '../stylesheets/AddMotorcycle.css';
import debug from 'debug';
import Navbar from './Navbar';

const AddMotorcycle = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/motorcycles');
        const motorcycles = await response.json();
        const currentUser = motorcycles[0].user_id;

        setMotorcycleData((prevMotorcycleData) => ({
          ...prevMotorcycleData,
          user_id: currentUser,
        }));
      } catch (error) {
        debug('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleChange = (e) => {
    setMotorcycleData({
      ...motorcycleData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/motorcycles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(motorcycleData),
      });

      if (response.ok) {
        setSuccessMessage('Motorcycle added successfully.');
        setMotorcycleData({
          name: '',
          image: '',
          description: '',
          price: '',
          user_id: motorcycleData.user_id,
        });
      } else {
        const error = await response.json();
        debug('Error adding motorcycle:', error);
      }
    } catch (error) {
      debug('Error:', error);
    }
  };

  return (
    <div className="add-motorcycle-main-container">
      <div className="add-motorcycle-nav-container">
        <Navbar />
      </div>
      <div className="add-motorcycle-content">
        <div className="add-motorcycle-form-container">
          <h1>Add Motorcycle</h1>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="add-motorcycle-form">
            <div className="add-motorcycle-input-container">
              <label htmlFor="name" className="add-motorcycle-label">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={motorcycleData.name}
                  onChange={handleChange}
                  className="add-motorcycle-input"
                />
              </label>
            </div>
            <div className="add-motorcycle-input-container">
              <label htmlFor="image" className="add-motorcycle-label">
                Image URL:
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={motorcycleData.image}
                  onChange={handleChange}
                  className="add-motorcycle-input"
                />
              </label>
            </div>
            <div className="add-motorcycle-input-container">
              <label htmlFor="description" className="add-motorcycle-label">
                Description:
                <textarea
                  id="description"
                  name="description"
                  value={motorcycleData.description}
                  onChange={handleChange}
                  className="add-motorcycle-input"
                />
              </label>
            </div>
            <div className="add-motorcycle-input-container">
              <label htmlFor="price" className="add-motorcycle-label">
                Price:
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={motorcycleData.price}
                  onChange={handleChange}
                  className="add-motorcycle-input"
                />
              </label>
            </div>
            <div className="add-motorcycle-button-container">
              <button type="submit" className="add-motorcycle-button">
                Add Motorcycle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMotorcycle;
