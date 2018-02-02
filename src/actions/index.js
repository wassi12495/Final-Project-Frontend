import { ASYNC_START, SET_CURRENT_USER, LOGOUT } from "./types";
import { adapter } from "../services";

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const createNewUser = (user, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.users.signup(user).then(res => console.log(res));

  // return { type: CREATE_NEW_USER, user };
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.login({ username, password }).then(user => {
    localStorage.setItem("token", user.jwt);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/");
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
