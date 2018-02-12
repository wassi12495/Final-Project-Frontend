import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES,
  POST_NEW_ROUTINE,
  SET_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  UPDATE_CURRENT_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  LOGOUT
} from "../actions/types";

// Handle Routines
const initialState = {
  routines: [],
  currentRoutine: null,
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
    case SET_CURRENT_NEW_ROUTINE:
      return { ...state, currentRoutine: action.data };
    case UPDATE_CURRENT_ROUTINE_TITLE:
      return {
        ...state,
        currentRoutine: {
          ...state.currentRoutine,
          title: action.data
        }
      };
    case ADD_EXERCISE_TO_CURRENT_ROUTINE:
      const exercises = state.currentRoutine.exercises;
      return {
        ...state,
        currentRoutine: {
          ...state.currentRoutine,
          exercises: [
            ...exercises.slice(0, action.data.index),
            action.data.update,
            ...exercises.slice(action.data.index + 1)
          ]
        }
      };
    case UPDATE_CURRENT_NEW_ROUTINE:
      const exercise = state.currentRoutine.exercises[action.data.index];
      const e = Object.assign({}, exercise, {
        amt: action.data.update.amt,
        sets: action.data.update.sets
      });
      return {
        ...state,
        currentRoutine: {
          ...state.currentRoutine,
          exercises: [
            ...state.currentRoutine.exercises.slice(0, action.data.index),
            e,
            ...state.currentRoutine.exercises.slice(action.data.index + 1)
          ]
        }
      };
    case POST_NEW_ROUTINE:
      return {
        ...state,
        routines: [...state.routines, action.data],
        currentRoutine: null,
        loading: false
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
