import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES,
  POST_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  REMOVE_EXERCISE_FROM_CURRENT_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  CLEAR_ROUTINE
} from "./types";
import { adapter } from "../services";

export const getRoutines = () => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.getRoutines().then(data => {
    if (data.errors) {
      dispatch({ type: ASYNC_ERROR_ROUTINES, data: data.errors });
    } else {
      dispatch({ type: GET_ROUTINES, data });
    }
  });
};

export const addRoutine = (history, data) => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.addRoutine(data).then(data => {
    if (data.errors) {
      dispatch({ type: ASYNC_ERROR_ROUTINES, data: data.errors });
    } else {
      dispatch({ type: POST_NEW_ROUTINE, data });
      history.push("/routines");
    }
  });
};

export const updateCurrentNewRoutine = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_NEW_ROUTINE, data });
};
export const addExerciseToCurrentNewRoutine = data => dispatch => {
  dispatch({ type: ADD_EXERCISE_TO_CURRENT_ROUTINE, data });
};
export const removeExerciseFromCurrentRoutine = index => dispatch => {
  dispatch({ type: REMOVE_EXERCISE_FROM_CURRENT_ROUTINE, index });
};

export const updateCurrentRoutineTitle = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_ROUTINE_TITLE, data });
};

export const clearRoutine = history => dispatch => {
  dispatch({ type: CLEAR_ROUTINE });
  history.goBack();
};
