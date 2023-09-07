import React, { useEffect } from 'react';
import '../stylesheets/reservations.css';
import { useSelector, useDispatch } from 'react-redux';
import ReservationCard from './ReservationCard';
import { getReservations } from '../redux/reservations/reservationsSlice';
import Navbar from './Navbar';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsState = useSelector((state) => state.reservations);

  useEffect(() => {
    const username = localStorage.getItem('username');
    dispatch(getReservations(username));
  }, [dispatch]);

  return (
    <div className="reservations-main-container">
      <section className="nav-container">
        <Navbar />
      </section>
      <div className="reservation-body">
        <section className="page-body">
          <div className="title-container">
            <h1 className="title">RESERVATIONS</h1>
          </div>
          <div className="reservations-container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Motorcycle</th>
                  <th scope="col">City</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {reservationsState.loading ? (
                  <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading your reservations...</span>
                  </div>
                ) : (
                  reservationsState.reservations.map((item) => (
                    <ReservationCard key={item.id} reserveItem={item} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservations;
