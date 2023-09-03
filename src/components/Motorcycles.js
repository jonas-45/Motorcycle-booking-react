import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/motorcycles.css';
import MotorbikeCard from './motorbike-card';
import { getMotorcycles } from '../redux/motorcycles/motorcycleSlice';
import Navbar from './Navbar';

const Motorcycle = ({ motor }) => (
  <Link to="/motorcycles/details" className="card-link" key={motor.id}>
    <MotorbikeCard
      name={motor.name}
      imgUrl={motor.image}
      description={motor.description}
    />
  </Link>
);

const Motorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(getMotorcycles());
  }, [dispatch]);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const paginatedMotorcycles = paginate(
    motorcycles.motorcycles,
    itemsPerPage,
    currentPage
  );

  const totalPages = Math.ceil(motorcycles.motorcycles.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="motorcycles-main-container">
      <section className="nav-container">
        <Navbar />
      </section>
      <section className="page-body">
        <div className="title-container">
          <h1 className="title">LATEST MODELS</h1>
          <p className="sub-title">Please select a motorcycle model</p>
        </div>
        <div className="motorcycles-container">
          {motorcycles.message === 'loading' ? (
            <div className="loading-indicator">Loading...</div>
          ) : (
            paginatedMotorcycles.map((motor) => (
              <Motorcycle key={motor.id} motor={motor} />
            ))
          )}
        </div>
        <div className="pagination-container">
          <button
            onClick={handlePrevPage}
            className={`pagination-button previous ${
              !hasPrevPage ? 'disabled' : ''
            }`}
            disabled={!hasPrevPage}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`pagination-button next ${
              !hasNextPage ? 'disabled' : ''
            }`}
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Motorcycles;
