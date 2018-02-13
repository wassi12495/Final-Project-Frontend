import {
  LOGOUT,
  ASYNC_START_NOTIFICATIONS,
  GET_NOTIFICATIONS
} from "../actions/types";

const initialState = {
  notifications: [],
  requests: [],
  loading: false,
  error: false,
  errorMessages: false
};
export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_NOTIFICATIONS:
      return { ...state, loading: true };
    case GET_NOTIFICATIONS:
      return { ...state, loading: false, requests: action.data };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
