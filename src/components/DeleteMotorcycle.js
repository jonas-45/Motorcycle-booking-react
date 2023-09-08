import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle } from '../redux/motorcycles/motorcycleSlice';
import '../stylesheets/DeleteMotorcycle.css';
import Navbar from './Navbar';

const ITEMS_PER_PAGE = 6;

const MotorcycleList = ({ motorcycles, onDelete }) => (
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
          onClick={() => onDelete(motorcycle.id)}
          className="delete-button"
          type="button"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

MotorcycleList.propTypes = {
  motorcycles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      // Add more specific PropTypes for the properties of your motorcycle object
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const DeleteMotorcycle = () => {
  const motorcyclesData = useSelector((state) => state.motorcycles);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const motorcycles = motorcyclesData.motorcycles.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const handleDelete = (motorcycleId) => {
    dispatch(deleteMotorcycle(motorcycleId));
  };

  const totalPages = Math.ceil(
    motorcyclesData.motorcycles.length / ITEMS_PER_PAGE,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="delete-motorcycle-container">
      <div className="nav-container">
        <Navbar />
      </div>
      <MotorcycleList motorcycles={motorcycles} onDelete={handleDelete} />
      <div className="pagination-container">
        <button
          type="button"
          onClick={handlePreviousPage}
          className={`pagination-button previous ${
            !hasPrevPage ? 'disabled' : '' // Use className for disabling
          }`}
          disabled={!hasPrevPage}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          className={`pagination-button next ${
            !hasNextPage ? 'disabled' : '' // Use className for disabling
          }`}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DeleteMotorcycle;
