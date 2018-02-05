import {
  SET_CURRENT_USER,
  LOGOUT,
  GET_EXERCISE_CATEGORIES,
  GET_USER_WORKOUTS
} from "../actions/types";

export const authReducer = (
  state = { currentUser: {}, workouts: [] },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const {
        id,
        username,
        first_name,
        last_name,
        workouts,
        routines
      } = action.user;
      return {
        ...state,
        currentUser: {
          id,
          username,
          firstName: first_name,
          lastName: last_name,
          workouts,
          routines
        }
      };
    case GET_USER_WORKOUTS:
      return { ...state, workouts: action.workouts };
    case LOGOUT:
      return { ...state, currentUser: {} };

    default:
      return state;
  }
};

export const exerciseCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXERCISE_CATEGORIES:
      return action.data;
    default:
      return state;
  }
};

// TODO: Determine if I need to store routines in state (probs not)
// export const routinesReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_NEW_ROUTINE:
//       return [...state, action.routine];
//     default:
//       return state;
//   }
// };
