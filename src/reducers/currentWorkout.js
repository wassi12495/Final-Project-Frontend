import {
  ASYNC_START_CURRENT_WORKOUT,
  ASYNC_ERROR_CURRENT_WORKOUT,
  SET_CURRENT_WORKOUT,
  GET_CURRENT_WORKOUT,
  NO_CURRENT_WORKOUT,
  FINISH_WORKOUT,
  ADD_EXERCISE_TO_CURRENT_WORKOUT,
  REMOVE_EXERCISE_FROM_CURRENT_WORKOUT,
  DELETE_CURRENT_WORKOUT,
  UPDATE_CURRENT_WORKOUT_EXERCISE,
  LOGOUT
} from "../actions/types";

// Handle Current Workout

const initialState = {
  exercises: null,
  id: null,
  inProgress: false,
  routine: null,
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
      debugger;
      return { ...state, currentWorkout: action.data };
    case GET_CURRENT_WORKOUT:
      return {
        ...state,
        id: action.data.id,
        exercises: action.data.exercises,
        routine: action.data.routine,
        inProgress: true,
        loading: false
      };
    case NO_CURRENT_WORKOUT:
      return initialState;
    case FINISH_WORKOUT:
      return initialState;
    case ADD_EXERCISE_TO_CURRENT_WORKOUT:
      return {
        ...state,
        exercises: [...state.exercises, action.data],
        loading: false
      };
    case REMOVE_EXERCISE_FROM_CURRENT_WORKOUT:
      return {
        ...state,
        currentWorkout: {
          exercises: [
            ...state.currentWorkout.exercises.slice(0, action.index),
            ...state.currentWorkout.exercises.slice(action.index + 1)
          ]
        },
        loading: false
      };

    case UPDATE_CURRENT_WORKOUT_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.currentWorkout.exercises.slice(0, action.index),
          action.data,
          ...state.currentWorkout.exercises.slice(action.index + 1)
        ]
      };
    case DELETE_CURRENT_WORKOUT:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
