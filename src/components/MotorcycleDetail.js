import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import debug from 'debug';
import Navbar from './Navbar';
import '../stylesheets/MotorCycleDetail.css';

const MotorcycleDetail = () => {
  const { id } = useParams();
  const [motorcycle, setMotorcycle] = useState(null);

  useEffect(() => {
    const fetchMotorcycleDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/motorcycles/${id}`,
        );

        if (response.ok) {
          const motorcycleData = await response.json();
          setMotorcycle(motorcycleData);
        } else {
          debug('Error fetching motorcycle details:', response.statusText);
        }
      } catch (error) {
        debug('Error fetching motorcycle details:', error);
      }
    };

    fetchMotorcycleDetail();
  }, [id]);

  if (!motorcycle) {
    return <p className="">Loading...</p>;
  }

  return (
    <div className="motorcycle-details-container">
      <div className="detail-motorcycle-nav-container">
        <Navbar />
      </div>
      <div className="motorcycle-details-content">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          className="motorcycle-details-img"
        />
        <div className="motorcycle-details-info">
          <h2 className="motorcycle-details-title">{motorcycle.name}</h2>
          <p className="motorcycle-details-description">
            Description:
            {' '}
            {motorcycle.description}
          </p>
          <p className="motorcycle-details-price">
            Price: $
            {motorcycle.price}
          </p>
          <p className="motorcycle-details-duration">
            Duration:
            {' '}
            {motorcycle.duration}
            {' '}
            days
          </p>
          <Link to={`/reserve/${motorcycle.id}/${encodeURIComponent(motorcycle.name)}`} className="motorcycle-reserve-button">
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetail;
