// Initial state for user data
export const initialState = {
  user: null,
  isLoggedIn: false,
};

// Reducer function to update state based on action type
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
