import {
  ASYNC_START_NEW_ROUTINE,
  ASYNC_ERROR_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE
} from "../actions/types";

const initialState = {
  exercises: [],
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

    default:
      return state;
  }
};
