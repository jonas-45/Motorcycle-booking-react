import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle } from '../redux/motorcycles/motorcycleSlice';
import '../stylesheets/DeleteMotorcycle.css';

const MotorcycleList = ({ motorcycles }) => {
  const dispatch = useDispatch();

  const handleDelete = (motorcycleId) => {
    dispatch(deleteMotorcycle(motorcycleId));
  };

  return (
    <div className="motorcycle-list-container">
      {motorcycles.map((motorcycle) => (
        <div key={motorcycle.id} className="motorcycle-item">
          <img
            src={motorcycle.image}
            alt={`motorcycle of ${motorcycle.name}`}
            className="motorcycle-image"
          />
          <h2 className="motorcycle-name">{motorcycle.name}</h2>
          <button
            onClick={() => handleDelete(motorcycle.id)}
            className="delete-button"
            type="button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

MotorcycleList.propTypes = {
  motorcycles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      // Add more specific PropTypes for the properties of your motorcycle object
    }),
  ).isRequired,
};

const DeleteMotorcycle = () => {
  const motorcycles = useSelector((state) => state.motorcycles);

  return (
    <div className="delete-motorcycle-container">
      <h1 className="delete-motorcycle-title">Delete Motorcycle</h1>
      <MotorcycleList motorcycles={motorcycles.motorcycles} />
    </div>
  );
};

export default DeleteMotorcycle;
