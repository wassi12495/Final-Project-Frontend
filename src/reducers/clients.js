import { ASYNC_START_CLIENTS, GET_CLIENTS, LOGOUT } from "../actions/types";

// Handle Clients
const initialState = {
  clients: [],
  loading: false
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
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
