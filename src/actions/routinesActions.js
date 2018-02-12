import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES,
  POST_NEW_ROUTINE,
  LOGOUT
} from "./types";
import { adapter } from "../services";

export const getRoutines = () => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.getRoutines().then(data => {
    dispatch({ type: GET_ROUTINES, data });
  });
};

export const addRoutine = (history, data) => dispatch => {
  dispatch({ type: POST_NEW_ROUTINE, data });
  history.push("/routines");
};
