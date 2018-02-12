import {
  ASYNC_START_CLIENTS,
  GET_USERS,
  GET_CLIENTS,
  LOGOUT
} from "../actions/types";

// Handle Clients
const initialState = {
  clients: [],
  loading: false,
  users: [],
  modal: false
};
export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_CLIENTS:
      return { ...state, loading: true };
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.data,
        loading: false
      };
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.data,
        modal: true
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
