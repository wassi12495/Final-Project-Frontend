import { CREATE_NEW_USER, SET_CURRENT_USER, LOGOUT } from "../actions/types";

export const userReducer = (state = [], action) => {
  console.log("USER REDUCER -- State is", state);
  console.log("USER REDUCER -- Action is", action);
  switch (action.type) {
    case CREATE_NEW_USER:
      console.log("CREATE_NEW_USER");
      return state;
    default:
      return state;
  }
};

export const authReducer = (state = { currentUser: {} }, action) => {
  console.log("AUTH REDUCER -- State is", state);
  console.log("AUTH REDUCER -- Action is", action);
  switch (action.type) {
    case SET_CURRENT_USER:
      const { id, username, first_name, last_name, workouts } = action.user;
      return {
        ...state,
        currentUser: {
          id,
          username,
          firstName: first_name,
          lastName: last_name,
          workouts
        }
      };
    case LOGOUT:
      return { ...state, currentUser: {} };

    default:
      return state;
  }
};
