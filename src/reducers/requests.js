import { LOGOUT, ASYNC_START_REQUEST } from "../actions/types";

const initialState = {
  loading: false,
  message: null,
  error: false,
  errorMessages: false
};
export const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_REQUEST:
      return { ...state, loading: true };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
