import React, { useState, useEffect } from 'react';

const AddMotorcycle = () => {
  const [motorcycleData, setMotorcycleData] = useState({
    name: '',
    description: '',
    photo: '',
    price: '',
    model: '',
    duration: '',
    user_id: null,
  });
  const [motorcycleAdded, setMotorcycleAdded] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('/api/motorcycles');
        const motorcycles = await response.json();
        const currentUser = motorcycle[0].user_id;

        setMotorcycleData((prevMotorcycleData) => ({
          ...prevMotorcycleData,
          user_id: currentUser,
        }));
      } catch (error) {
        console.error('Error fetching current user:', error);
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
      const response = await fetch('/api/motorcycles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(motorcycleData),
      });

      if (response.ok) {
        const newMotorcycle = await response.json();

        setMotorcycleData({
          name: '',
          description: '',
          photo: '',
          price: '',
          model: '',
          duration: '',
          user_id: motorcycleData.user_id,
        });
        setMotorcycleAdded(true);
      } else {
        const error = await response.json();
        console.error('Error adding motorcycle:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      {motorcycleAdded && (
        <p className="">
          New motorcycle has been added!
        </p>
      )}
      <div className="">
        <h1 className="">Add Car</h1>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="name" className="">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={motorcycleData.name}
              onChange={handleChange}
              className=""
            />
          </div>
          <div>
            <label htmlFor="model" className="block mb-1">
              Model:
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={motorcycleData.model}
              onChange={handleChange}
              className=""
            />
          </div>
          <div>
            <label htmlFor="duration" className="block mb-1">
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={motorcycleData.model}
              onChange={handleChange}
              className=""
            />
          </div>
          <div>
            <label htmlFor="price" className="">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={motorcycleData.price}
              onChange={handleChange}
              className=""
            />
          </div>
          <div>
            <label htmlFor="description" className="">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={motorcycleData.description}
              onChange={handleChange}
              className=""
            />
          </div>
          <div>
            <label htmlFor="photo" className="">
              Photo URL:
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              value={motorcycleData.photo}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="">
            <button
              type="submit"
              className=""
            >
              Add Motorcycle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMotorcycle;
