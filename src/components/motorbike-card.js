import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/motorbike-card.css';

const MotorbikeCard = ({ name, imgUrl, description }) => (
  <div className="card-container">
    <img
      src={imgUrl}
      alt={`${name}_image`}
      width={200}
      height={200}
      className="card-img"
    />
    <div className="motorbike-details">
      <div className="motorbike-name">{name}</div>
      <div className="separator" />
      <div className="motorbike-description">{description}</div>
    </div>
  </div>
);

MotorbikeCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MotorbikeCard;
