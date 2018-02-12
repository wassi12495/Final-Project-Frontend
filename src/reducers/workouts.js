import { GET_USER_WORKOUTS, FINISH_WORKOUT } from "../actions/types";
// Handle Workouts
export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_WORKOUTS:
      return action.workouts;
    case FINISH_WORKOUT:
      return [...state, action.data];
    default:
      return state;
  }
};
