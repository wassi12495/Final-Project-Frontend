import { GET_CLIENTS, LOGOUT } from "../actions/types";

// Handle Clients
export const clientsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return action.data;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
