import {
  ASYNC_START_EXERCISES,
  ASYNC_ERROR_EXERCISES,
  GET_EXERCISES,
  ADD_EXERCISE
} from "./types";
import { adapter } from "../services";

export const getExercises = () => dispatch => {
  dispatch({ type: ASYNC_START_EXERCISES });
  adapter.exercises.getExercises().then(data => {
    dispatch({ type: GET_EXERCISES, data });
  });
};

export const addExercise = (data, history) => dispatch => {
  dispatch({ type: ASYNC_START_EXERCISES });
  adapter.exercises.addExercise(data).then(data => {
    if (data.errors) {
      dispatch({ type: ASYNC_ERROR_EXERCISES, data: data.errors });
    } else {
      dispatch({ type: ADD_EXERCISE, data });
      history.push("/exercises");
    }
  });
};
