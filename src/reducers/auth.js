import { SET_CURRENT_USER, LOGOUT } from "../actions/types";

// Handle Authentication
export const authReducer = (state = { currentUser: {} }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const {
        id,
        username,
        first_name,
        last_name,
        workouts,
        routines,
        currentWorkout,
        is_trainer
      } = action.user;
      return {
        ...state,
        currentUser: {
          id,
          username,
          firstName: first_name,
          lastName: last_name,
          workouts,
          routines,
          currentWorkout,
          is_trainer
        }
      };

    case LOGOUT:
      return { ...state, currentUser: {} };

    default:
      return state;
  }
};
