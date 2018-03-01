import {
  ASYNC_START_USER,
  ASYNC_ERROR_USER_LOGIN,
  ASYNC_ERROR_USER_SIGNUP,
  SIGNEDUP,
  LOGIN,
  LOGOUT
} from "../actions/types";

const initialState = {
  loading: false,
  loginError: false,
  signupError: false,
  signupErrorMessages: null,
  loginErrorMessages: null,
  loggingIn: false
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_USER:
      return { loading: true, loggingIn: false };
    case ASYNC_ERROR_USER_LOGIN:
      return {
        loading: false,
        loginError: true,
        loginErrorMessages: action.data
      };
    case ASYNC_ERROR_USER_SIGNUP:
      return {
        loading: false,
        signupError: true,
        signupErrorMessages: action.data
      };
    case SIGNEDUP:
      return {
        loading: false,
        signupError: false,
        loginError: false,
        signupErrorMessages: null,
        loginErrorMessages: null,
        loggingIn: true
      };
    case LOGIN:
      return {
        loading: false,
        signupError: false,
        loginError: false,
        signupErrorMessages: null,
        loginErrorMessages: null,
        loggingIn: false
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
