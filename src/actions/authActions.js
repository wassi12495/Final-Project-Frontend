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
    dispatch({ type: SET_CURRENT_USER, data: user });
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
