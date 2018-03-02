import {
  ASYNC_START_NEW_ROUTINE,
  ASYNC_ERROR_NEW_ROUTINE,
  BEGIN_NEW_ROUTINE,
  DELETE_NEW_ROUTINE,
  UPDATE_NEW_ROUTINE_TITLE,
  UPDATE_NEW_ROUTINE_EXERCISES,
  ADD_EXERCISE_TO_NEW_ROUTINE,
  DELETE_NEW_ROUTINE_EXERCISE
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
    case UPDATE_NEW_ROUTINE_EXERCISES:
      const exercise = state.currentRoutine.exercises[action.data.index];
      const e = Object.assign({}, exercise, {
        amt: action.data.update.amt,
        sets: action.data.update.sets
      });
      return {
        ...state,

        exercises: [
          ...state.currentRoutine.exercises.slice(0, action.data.index),
          e,
          ...state.currentRoutine.exercises.slice(action.data.index + 1)
        ]
      };
    case ADD_EXERCISE_TO_NEW_ROUTINE:
      return {
        ...state,
        exercises: [...state.exercises, action.data.exercise]
      };
    // exercises: [
    //   ...state.exercises.slice(0, action.data.index),
    //   action.data.update,
    //   ...state.exercises.slice(action.data.index + 1)
    // ]

    case DELETE_NEW_ROUTINE_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.index),
          ...state.exercises.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};
