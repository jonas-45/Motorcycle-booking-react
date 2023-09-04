import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const MotorcycleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [motorcycle, setMotorcycle] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
  });

  useEffect(() => {
    const fetchMotorcycleDetail = async () => {
      try {
        const [response, userResponse] = await Promise.all([
          fetch(`/api/motorcycle/${id}`),
          fetch('/api/users'),
        ]);
        const [motorcycleData, userData] = await Promise.all([
          response.json(),
          userResponse.json(),
        ]);

        if (motorcycleData && motorcycleData.id && userData && userData.length > 0) {
          const user = userData[0];
          setUserId(user.id);
          setMotorcycle(motorcycleData);
        } else {
          console.error('Motorcycle or user data not available');
        }
      } catch (error) {
        console.error('Error fetching motorcycle details:', error);
      }
    };

    fetchMotorcycleDetail();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReservation = async () => {
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          motorcycle_id: motorcycle.id,
          motorcycle_name: motorcycle.name,
          motorcycle_model: motorcycle.model,
          start_date: formData.start_date,
          end_date: formData.end_date,
          user_id: userId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.alreadyReserved) {
          alert('The motorcycle is already reserved.');
        } else {
          alert('Motorcycle reserved successfully.');
          navigate('/reservations');
        }
      } else {
        const error = await response.text();
        console.error('Error reserving motorcycle:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!motorcycle) {
    return <p className="">Loading...</p>;
  }

  return (
    <div className="">
      <div className="">
        <img src={motorcycle.photo} alt={motorcycle.name} />
      </div>
      <div className="">
        <button className="">
          <Link to="/motorcycles">
            <Link />
          </Link>
        </button>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <h2>
              {motorcycle.name}
              {' '}
              -
              {motorcycle.model}
            </h2>
          </div>

          <div className="">
            <p>
              Price: $
              {motorcycle.price}
            </p>
            <p>
              Description:
              {motorcycle.description}
            </p>
            <p>
              Duration:
              {motorcycle.duration}
            </p>
          </div>
          <form onSubmit={handleReservation} className="">
            <label className="">
              Start Date:
              <input
                className=""
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="">
              End Date:
              <input
                className=""
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <button
              className=""
              type="submit"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetail;
