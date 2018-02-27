import {
  ASYNC_START_USER,
  ASYNC_ERROR_USER,
  SIGNEDUP,
  LOGIN,
  LOGOUT
} from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  errorMessages: null,
  loggingIn: false
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_USER:
      return { loading: true, loggingIn: false };
    case ASYNC_ERROR_USER:
      return { loading: false, error: true, errorMessages: action.data };
    case SIGNEDUP:
      return {
        loading: false,
        error: false,
        errorMessages: null,
        loggingIn: true
      };
    case LOGIN:
      return {
        loading: false,
        error: false,
        errorMessages: null,
        loggingIn: false
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
