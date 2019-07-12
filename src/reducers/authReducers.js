const initState = {
  authError: null
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCES":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducers;
