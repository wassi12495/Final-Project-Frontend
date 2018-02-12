import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES,
  POST_NEW_ROUTINE,
  SET_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE
} from "./types";
import { adapter } from "../services";

export const getRoutines = () => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.getRoutines().then(data => {
    dispatch({ type: GET_ROUTINES, data });
  });
};

export const addRoutine = (history, data) => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.addRoutine(data).then(data => {
    debugger;
  });
  dispatch({ type: POST_NEW_ROUTINE, data });
  history.push("/routines");
};

export const setCurrentNewRoutine = data => dispatch => {
  dispatch({ type: SET_CURRENT_NEW_ROUTINE, data });
};

export const updateCurrentNewRoutine = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_NEW_ROUTINE, data });
};
export const addExerciseToCurrentNewRoutine = data => dispatch => {
  dispatch({ type: ADD_EXERCISE_TO_CURRENT_ROUTINE, data });
};

export const updateCurrentRoutineTitle = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_ROUTINE_TITLE, data });
};
