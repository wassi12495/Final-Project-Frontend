import { ASYNC_START, SET_CURRENT_USER, CREATE_NEW_USER } from "./types";
import { adapter } from "../services";

export const setCurrentUser = () => {
  return { type: SET_CURRENT_USER, user: {} };
};

export const createNewUser = (user, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.users.signup(user).then(res => console.log(res));

  // return { type: CREATE_NEW_USER, user };
};
