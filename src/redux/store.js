import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycleSlice';
import authReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    motorcycles: motorcycleReducer,
    auth: authReducer,
  },
});

export default store;
