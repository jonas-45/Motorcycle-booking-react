import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycleSlice';
import authReducer from './users/userSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    motorcycles: motorcycleReducer,
    reservations: reservationsReducer,
    auth: authReducer,
  },
});

export default store;
