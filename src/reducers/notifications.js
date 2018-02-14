import {
  LOGOUT,
  ASYNC_START_NOTIFICATIONS,
  GET_NOTIFICATIONS,
  ACCEPT_REQUEST_UPDATE_NOTIFICATIONS
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
    case ACCEPT_REQUEST_UPDATE_NOTIFICATIONS:
      return {
        ...state,
        requests: [
          ...state.requests.slice(0, action.index),
          ...state.requests.slice(action.index + 1)
        ]
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
