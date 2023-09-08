import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMotorcycles = createAsyncThunk('motorcycles', async () => {
  const response = await fetch('http://localhost:3000/api/motorcycles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    throw new Error(responseData.message);
  }
  return responseData;
});

export const postMotorcycles = createAsyncThunk(
  'postMotorcycles',
  async (data) => {
    const response = await fetch('http://localhost:3000/api/motorcycles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      throw new Error(responseData.message);
    }
    return responseData;
  },
);

const initialState = {
  user: {},
  motorcycles: [],
  message: '',
  loggedIn: false,
};

export const deleteMotorcycle = createAsyncThunk(
  'deleteMotorcycle',
  async (motorcycleId) => {
    const response = await fetch(
      `http://localhost:3000/api/motorcycles/${motorcycleId}`,
      {
        method: 'DELETE',
      },
    );

    const responseData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      throw new Error(responseData.message);
    }
    return motorcycleId; // Return the deleted motorcycleId if successful
  },
);
const MotorcycleSlice = createSlice({
  name: 'motorcycles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMotorcycles.pending, (state) => {
        state.message = 'loading';
      })
      .addCase(getMotorcycles.fulfilled, (state, action) => {
        const responseData = action.payload;
        return {
          ...state,
          motorcycles: responseData,
          message: 'success',
        };
      })
      .addCase(getMotorcycles.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        message: action.error.message,
      }))
      .addCase(postMotorcycles.fulfilled, (state, action) => {
        const responseData = action.payload;
        return {
          ...state,
          motorcycles: [...state.motorcycles, responseData],
          message: 'post success',
        };
      })
      .addCase(postMotorcycles.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        message: action.error.message,
      }))
      // Add the delete action cases here
      .addCase(deleteMotorcycle.pending, (state) => {
        state.message = 'deleting';
      })
      .addCase(deleteMotorcycle.fulfilled, (state, action) => {
        const deletedMotorcycleId = action.payload;
        return {
          ...state,
          motorcycles: state.motorcycles.filter(
            (motorcycle) => motorcycle.id !== deletedMotorcycleId,
          ),
          message: 'delete success',
        };
      })
      .addCase(deleteMotorcycle.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        message: action.error.message,
      }));
  },
});

export default MotorcycleSlice.reducer;
