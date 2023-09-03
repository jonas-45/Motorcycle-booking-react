const initialState = {
    username: '',
    isAuthenticated: false,
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
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
