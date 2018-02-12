import {
  ASYNC_START_EXERCISE_CATEGORIES,
  GET_EXERCISE_CATEGORIES
} from "./types";
import { adapter } from "../services";
export { getExercises, addExercise } from "./exercisesActions";
export {
  getRoutines,
  addRoutine,
  setCurrentNewRoutine,
  updateCurrentNewRoutine,
  updateCurrentRoutineTitle,
  addExerciseToCurrentNewRoutine,
  clearRoutine
} from "./routinesActions";
export { getWorkouts } from "./workoutsActions";
export {
  postCurrentWorkout,
  getCurrentWorkout,
  addExerciseToCurrentWorkout,
  deleteCurrentWorkout,
  updateCurrentWorkoutExercise,
  finishWorkout
} from "./currentWorkoutActions";
export { getClients } from "./clientsActions";
export { fetchUser, login, logout } from "./authActions";
export { signup } from "./userActions";

export const getExerciseCategories = () => dispatch => {
  dispatch({ type: ASYNC_START_EXERCISE_CATEGORIES });
  adapter.exercises.getExCas().then(data => {
    dispatch({ type: GET_EXERCISE_CATEGORIES, data });
  });
};
