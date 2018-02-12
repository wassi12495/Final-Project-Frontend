import {
  SET_CURRENT_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  POST_NEW_ROUTINE
} from "../actions/types";

// Handle Current Routines
export const currentRoutineReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_NEW_ROUTINE:
      return action.routine;
    case ADD_EXERCISE_TO_CURRENT_ROUTINE:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          action.data.update,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case UPDATE_CURRENT_NEW_ROUTINE:
      const exercise = state.exercises[action.data.index];
      const e = Object.assign({}, exercise, {
        amt: action.data.update.amt,
        sets: action.data.update.sets
      });
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          e,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case UPDATE_CURRENT_ROUTINE_TITLE:
      return { ...state, title: action.title };
    case POST_NEW_ROUTINE:
      return {};
    default:
      return state;
  }
};
