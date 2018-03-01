import {
  ASYNC_START_NEW_ROUTINE,
  ASYNC_ERROR_NEW_ROUTINE,
  BEGIN_NEW_ROUTINE,
  DELETE_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE
} from "./types";
import { adapter } from "../services";

export const beginNewRoutine = data => dispatch => {
  dispatch({ type: BEGIN_NEW_ROUTINE, data });
};

export const deleteNewRoutine = history => dispatch => {
  dispatch({ type: DELETE_NEW_ROUTINE });
  history.push("/routines");
};
