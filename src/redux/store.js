import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycleSlice';

const store = configureStore({
  reducer: {
    motorcycles: motorcycleReducer,
  },
});

export default store;
