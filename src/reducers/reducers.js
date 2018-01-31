import { FETCH_USER } from "../actions/types";

export const userReducer = (state = [], action) => {
  console.log("State is", state);
  console.log("Action is", action);
  switch (action.type) {
    case FETCH_USER:
      return state;
    default:
      return state;
  }
};
