import { adapter } from "../services";
import {
  ASYNC_START_CURRENT_WORKOUT,
  ASYNC_START_WORKOUTS,
  ASYNC_ERROR_CURRENT_WORKOUT,
  SET_CURRENT_WORKOUT,
  NO_CURRENT_WORKOUT,
  GET_CURRENT_WORKOUT,
  ADD_EXERCISE_TO_CURRENT_WORKOUT,
  REMOVE_EXERCISE_FROM_CURRENT_WORKOUT,
  DELETE_CURRENT_WORKOUT,
  UPDATE_CURRENT_WORKOUT_EXERCISES,
  UPDATE_CURRENT_WORKOUT_TITLE,
  FINISH_WORKOUT,
  ADD_WORKOUT
} from "./types";

export const postCurrentWorkout = (data, history) => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.postCurrentWorkout(data).then(res => {
    if (res.errors) {
      dispatch({ type: ASYNC_ERROR_CURRENT_WORKOUT, data: res.errors });
    } else {
      dispatch({ type: SET_CURRENT_WORKOUT, data: res });
      history.push("/current_workout");
    }
  });
};

export const getCurrentWorkout = () => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.getCurrentWorkout().then(data => {
    if (data.error) {
      dispatch({ type: NO_CURRENT_WORKOUT });
    } else {
      dispatch({ type: GET_CURRENT_WORKOUT, data });
    }
  });
};

export const addExerciseToCurrentWorkout = data => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.addExerciseToCurrentWorkout(data).then(res => {
    dispatch({ type: ADD_EXERCISE_TO_CURRENT_WORKOUT, data: res });
  });
};

export const removeExerciseFromCurrentWorkout = (data, index) => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.removeExerciseFromCurrentWorkout(data).then(res => {
    dispatch({ type: REMOVE_EXERCISE_FROM_CURRENT_WORKOUT, index });
  });
};

export const deleteCurrentWorkout = (id, history) => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.deleteCurrentWorkout(id).then(res => {
    history.push("/");
    dispatch({ type: DELETE_CURRENT_WORKOUT });
  });
};

export const updateCurrentWorkoutExercises = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_WORKOUT_EXERCISES, data });
};

export const updateCurrentWorkoutTitle = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_WORKOUT_TITLE, data });
};

export const finishWorkout = (history, data) => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  dispatch({ type: ASYNC_START_WORKOUTS });
  adapter.workouts.completeCurrentWorkout(data).then(res => {
    dispatch({ type: ADD_WORKOUT, data: res });
    history.push("/");
    dispatch({ type: FINISH_WORKOUT });
  });
};
