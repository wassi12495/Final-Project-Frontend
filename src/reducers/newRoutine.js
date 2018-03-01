import {
  ASYNC_START_NEW_ROUTINE,
  ASYNC_ERROR_NEW_ROUTINE,
  BEGIN_NEW_ROUTINE,
  DELETE_NEW_ROUTINE,
  UPDATE_NEW_ROUTINE_TITLE,
  UPDATE_CURRENT_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE
} from "../actions/types";

const initialState = {
  exercises: null,
  title: null,
  userId: null,
  loading: false,
  error: false,
  errorMessages: null
};

export const newRoutineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_NEW_ROUTINE:
      return { ...state, loading: true };
    case ASYNC_ERROR_NEW_ROUTINE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessages: action.data
      };
    case BEGIN_NEW_ROUTINE:
      return {
        ...state,
        exercises: action.data.exercises,
        title: action.data.title,
        userId: action.data.user_id
      };
    case DELETE_NEW_ROUTINE:
      return initialState;

    case UPDATE_NEW_ROUTINE_TITLE:
      return {
        ...state,
        title: action.data
      };

    default:
      return state;
  }
};
