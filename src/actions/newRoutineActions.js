import {
  ASYNC_START_NEW_ROUTINE,
  ASYNC_ERROR_NEW_ROUTINE,
  BEGIN_NEW_ROUTINE,
  DELETE_NEW_ROUTINE,
  UPDATE_NEW_ROUTINE_TITLE,
  UPDATE_NEW_ROUTINE_EXERCISES,
  ADD_EXERCISE_TO_NEW_ROUTINE,
  DELETE_NEW_ROUTINE_EXERCISE
} from "./types";
import { adapter } from "../services";

export const beginNewRoutine = data => dispatch => {
  dispatch({ type: BEGIN_NEW_ROUTINE, data });
};

export const deleteNewRoutine = history => dispatch => {
  dispatch({ type: DELETE_NEW_ROUTINE });
  history.push("/routines");
};

export const updateNewRoutineTitle = data => dispatch => {
  dispatch({ type: UPDATE_NEW_ROUTINE_TITLE, data });
};

export const updateNewRoutineExercises = data => dispatch => {
  debugger;
  dispatch({ type: UPDATE_NEW_ROUTINE_EXERCISES, data });
};

export const addExerciseToNewRoutine = data => dispatch => {
  dispatch({ type: ADD_EXERCISE_TO_NEW_ROUTINE, data });
};

export const deleteNewRoutineExercise = index => dispatch => {
  dispatch({ type: DELETE_NEW_ROUTINE_EXERCISE, index });
};
