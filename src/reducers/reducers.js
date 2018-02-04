import { SET_CURRENT_USER, LOGOUT } from "../actions/types";

export const authReducer = (state = { currentUser: {} }, action) => {
  console.log("AUTH REDUCER -- State is", state);
  console.log("AUTH REDUCER -- Action is", action);
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
    case LOGOUT:
      return { ...state, currentUser: {} };

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
