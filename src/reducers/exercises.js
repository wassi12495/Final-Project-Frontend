import {
  GET_EXERCISES,
  ADD_EXERCISE,
  LOGOUT,
  ASYNC_START_EXERCISES,
  ASYNC_ERROR_EXERCISES
} from "../actions/types";

// Handle Exercises
const initialState = {
  exercises: [],
  loading: false,
  error: false,
  errorMessages: null
};
export const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_EXERCISES:
      return { ...state, loading: true };
    case ASYNC_ERROR_EXERCISES:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessages: action.data
      };
    case GET_EXERCISES:
      return { ...state, exercises: action.data, loading: false, error: false };
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises, action.data],
        loading: false,
        error: false
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
