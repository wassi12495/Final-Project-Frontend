import { adapter } from "../services";
import {
  ASYNC_START_USER,
  ASYNC_ERROR_USER_LOGIN,
  ASYNC_ERROR_USER_SIGNUP,
  SIGNEDUP,
  LOGIN,
  LOGOUT
} from "./types";

export const signup = user => dispatch => {
  dispatch({ type: ASYNC_START_USER });
  adapter.user.signup(user).then(res => {
    if (res.errors) {
      dispatch({ type: ASYNC_ERROR_USER_SIGNUP, data: res.errors });
    } else {
      dispatch({ type: SIGNEDUP });
    }
  });
};

export const login = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START_USER });
  adapter.auth.login({ username, password }).then(res => {
    if (res.errors) {
      dispatch({ type: ASYNC_ERROR_USER_LOGIN, data: res.errors });
    } else {
      localStorage.setItem("token", res.jwt);
      dispatch({ type: LOGIN, data: res });
      history.push("/");
    }
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
