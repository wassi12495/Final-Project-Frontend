import { ASYNC_START_USER, ASYNC_ERROR_USER, SIGNEDUP } from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  errorMessages: null,
  signedup: false
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_USER:
      return { loading: true };
    case ASYNC_ERROR_USER:
      return { loading: false, error: true, errorMessages: action.data };
    case SIGNEDUP:
      return {
        loading: false,
        error: false,
        errorMessages: null,
        signedup: true
      };
    default:
      return state;
  }
};
