import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getReservations = createAsyncThunk('user/reservations', async (username) => {
  try {
    const response = await fetch(`http://localhost:3000/api/reservations?username=${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // check if response was not successful
    if (!response.ok) {
      throw new Error('Request failed');
    }

    // parse response data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Failed to fetch reservations: ${error.message}`);
  }
});

export const submitReservation = createAsyncThunk('user/addReservation', async (data) => {
  try {
    const response = await fetch('http://localhost:3000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Reservation failed');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Failed to save reservation ${error.message}`);
  }
});

export const resetMessage = () => (dispatch) => {
  dispatch({ type: 'ReservationsSlice/resetMessage' }); // Replace 'reservations' with your slice name
};

const initialState = {
  loading: false,
  reservations: [],
  error: '',
  message: '',
};

const ReservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    resetMessage: (state) => ({
      ...state,
      message: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        const responseData = action.payload;
        return {
          ...state,
          reservations: responseData,
          loading: false,
        };
      })
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(submitReservation.fulfilled, (state, action) => {
        const responseData = action.payload;
        return {
          ...state,
          reservations: [...state.reservations, responseData],
          message: 'reservation successfully saved',
        };
      })
      .addCase(submitReservation.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        message: 'Reservation failed',
      }));
  },
});

export default ReservationsSlice.reducer;
