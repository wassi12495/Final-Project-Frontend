import { adapter } from "../services";
import { ASYNC_START_USER, ASYNC_ERROR_USER, SIGNEDUP } from "./types";

export const signup = user => dispatch => {
  dispatch({ type: ASYNC_START_USER });
  adapter.user.signup(user).then(res => {
    if (res.errors) {
      dispatch({ type: ASYNC_ERROR_USER, data: res.errors });
    } else {
      dispatch({ type: SIGNEDUP });
    }
  });
};
