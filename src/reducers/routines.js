import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES,
  SAVE_NEW_ROUTINE,
  LOGOUT
} from "../actions/types";

// Handle Routines
const initialState = {
  routines: [],
  loading: false,
  error: false,
  errorMessages: null
};
export const routinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_ROUTINES:
      return { ...state, loading: true };
    case ASYNC_ERROR_ROUTINES:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessages: action.data
      };
    case GET_ROUTINES:
      return { ...state, routines: action.data, loading: false, error: false };

    case SAVE_NEW_ROUTINE:
      return {
        ...state,
        routines: [...state.routines, action.data],
        error: false,
        loading: false
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
