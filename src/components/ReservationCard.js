import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({ reserveItem }) => {
  const {
    id, motorName, city, reserveDate,
  } = reserveItem;
  return (
    <tr>
      <td>{id}</td>
      <td>{motorName}</td>
      <td>{city}</td>
      <td>{reserveDate}</td>
    </tr>
  );
};

ReservationCard.propTypes = {
  reserveItem: PropTypes.shape({
    id: PropTypes.string,
    motorName: PropTypes.string,
    city: PropTypes.string,
    reserveDate: PropTypes.string,
  }).isRequired,
};

export default ReservationCard;
