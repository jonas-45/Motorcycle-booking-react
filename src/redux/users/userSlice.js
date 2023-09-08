const initialState = {
  username: '',
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('username', action.payload);
      return {
        ...state,
        username: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      localStorage.removeItem('username');
      return {
        ...state,
        username: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
