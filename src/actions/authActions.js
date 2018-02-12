import { adapter } from "../services";
import {
  ASYNC_START_AUTH,
  ASYNC_ERROR_AUTH,
  LOGOUT,
  SET_CURRENT_USER
} from "./types";

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START_AUTH });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START_AUTH });
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
