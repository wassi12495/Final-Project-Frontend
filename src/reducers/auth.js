import {
  ASYNC_START_AUTH,
  ASYNC_ERROR_AUTH,
  SET_CURRENT_USER,
  LOGOUT
} from "../actions/types";

// Handle Authentication
const initialState = {
  currentUser: {},
  loading: false,
  error: false,
  errorMessages: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_AUTH:
      return { ...state, loading: true };
    case ASYNC_ERROR_AUTH:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessages: action.data
      };
    case SET_CURRENT_USER:
      const {
        id,
        username,
        first_name,
        last_name,
        workouts,
        routines,
        currentWorkout,
        is_trainer
      } = action.data;
      return {
        ...state,
        currentUser: {
          id,
          username,
          firstName: first_name,
          lastName: last_name,
          workouts,
          routines,
          currentWorkout,
          is_trainer
        },
        loading: false,
        error: false,
        errorMessages: null
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
