import { GET_ROUTINES, POST_NEW_ROUTINE, LOGOUT } from "../actions/types";

// Handle Routines
export const routinesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ROUTINES:
      return action.data;
    case POST_NEW_ROUTINE:
      return action.data;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
