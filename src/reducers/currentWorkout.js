import {
  ASYNC_START_CURRENT_WORKOUT,
  ASYNC_ERROR_CURRENT_WORKOUT,
  SET_CURRENT_WORKOUT,
  GET_CURRENT_WORKOUT,
  NO_CURRENT_WORKOUT,
  FINISH_WORKOUT,
  ADD_EXERCISE_TO_CURRENT_WORKOUT,
  DELETE_CURRENT_WORKOUT,
  LOGOUT
} from "../actions/types";

// Handle Current Workout

const initialState = {
  currentWorkout: null,
  loading: false,
  error: false,
  errorMessages: null
};
export const currentWorkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_CURRENT_WORKOUT:
      return { ...state, loading: true };
    case ASYNC_ERROR_CURRENT_WORKOUT:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessages: action.data
      };
    case SET_CURRENT_WORKOUT:
      return { ...state, currentWorkout: action.data };
    case GET_CURRENT_WORKOUT:
      return action.data;
    case NO_CURRENT_WORKOUT:
      return null;
    case FINISH_WORKOUT:
      return null;
    case ADD_EXERCISE_TO_CURRENT_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          action.data.update,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case DELETE_CURRENT_WORKOUT:
      return null;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
