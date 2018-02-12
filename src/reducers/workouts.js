import {
  ASYNC_START_WORKOUTS,
  GET_USER_WORKOUTS,
  ADD_WORKOUT
} from "../actions/types";
// Handle Workouts
const initialState = {
  workouts: [],
  loading: false,
  error: false,
  errorMessages: null
};
export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_START_WORKOUTS:
      return { ...state, loading: true };
    case GET_USER_WORKOUTS:
      return { ...state, workouts: action.data, loading: false };
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.data],
        loading: false
      };
    default:
      return state;
  }
};
