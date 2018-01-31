import { FETCH_USER, SET_CURRENT_USER } from "./types";

export const setCurrentUser = () => {
  return { type: SET_CURRENT_USER, user: {} };
};
