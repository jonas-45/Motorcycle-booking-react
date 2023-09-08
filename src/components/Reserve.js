import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../stylesheets/reservations.css';
import { useParams } from 'react-router';
import { submitReservation, resetMessage } from '../redux/reservations/reservationsSlice';
import './reserve.css';

const Reserve = () => {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reservations);
  const { id, name } = useParams();
  const username = localStorage.getItem('username');

  useEffect(() => {
    dispatch(resetMessage());
  }, [dispatch]);

  const [reserveData, setReserveData] = useState({
    reservation_date: '',
    city: '',
    user_id: '',
    motorcycle_id: id,
    username,
    motorcycle: name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserveData({
      ...reserveData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(submitReservation(reserveData));
    } catch (error) {
      throw new Error('reserve submit error', error);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/current_user_id?username=${username}`);
        const result = await response.json();
        const currentUser = result.id;

        setReserveData((prevReserveData) => ({
          ...prevReserveData,
          user_id: currentUser,
        }));
      } catch (error) {
        throw new Error('Saving failed', error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <section className="reservation-section">
      <div className="reservation-wrapper">

        <div className="add-reservation-form-container">
          <h1 className="text-center">
            Book a
            {reserveData.motorcycle}
            {' '}
            Ride
          </h1>
          <p>
            We ensure constant and consistent maintenance of all our rides
            to gurantee our customers a safe and enjoyable transportation.
          </p>
          {reserves.message && (
            <p className="success-message">{reserves.message}</p>
          )}
          <form onSubmit={handleSubmit} className="add-reservation-form">
            <div className="add-reservation-input-container">
              <label htmlFor="date" className="add-reservation-label">
                Date:
                <input
                  type="date"
                  id="date"
                  name="reservation_date"
                  value={reserveData.reservation_date}
                  onChange={handleChange}
                  required="required"
                  className="add-reservation-input"
                />
              </label>
            </div>
            <div className="add-reservation-input-container">
              <label htmlFor="city" className="add-reservation-label">
                City:
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={reserveData.city}
                  onChange={handleChange}
                  required="required"
                  className="add-reservation-input"
                />
              </label>
            </div>
            <div className="add-reservation-input-container">
              <label htmlFor="username" className="add-reservation-label">
                Username:
                <input
                  id="username"
                  name="username"
                  value={reserveData.username}
                  onChange={handleChange}
                  readOnly="readonly"
                  className="add-reservation-input"
                />
              </label>
            </div>
            <div className="add-reservation-input-container">
              <label htmlFor="motorcycle" className="add-reservation-label">
                Motorcycle:
                <input
                  type="text"
                  id="motorcycle"
                  name="motorcycle"
                  value={reserveData.motorcycle}
                  onChange={handleChange}
                  readOnly="readonly"
                  className="add-reservation-input"
                />
              </label>
            </div>
            <div className="add-reservation-button-container">
              <NavLink to="/motorcycles" className="back-link">
                Back
              </NavLink>
              <button type="submit" className="add-reservation-button">
                Add Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
