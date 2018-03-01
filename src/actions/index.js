import {
  ASYNC_START_EXERCISE_CATEGORIES,
  GET_EXERCISE_CATEGORIES
} from "./types";
import { adapter } from "../services";
export { getExercises, addExercise } from "./exercisesActions";
export {
  getRoutines,
  addRoutine,
  addExerciseToCurrentNewRoutine,
  removeExerciseFromCurrentRoutine
} from "./routinesActions";
export {
  beginNewRoutine,
  deleteNewRoutine,
  updateNewRoutineTitle,
  updateNewRoutineExercises
} from "./newRoutineActions";
export { getWorkouts } from "./workoutsActions";
export {
  postCurrentWorkout,
  getCurrentWorkout,
  addExerciseToCurrentWorkout,
  deleteCurrentWorkout,
  updateCurrentWorkoutExercise,
  finishWorkout,
  removeExerciseFromCurrentWorkout
} from "./currentWorkoutActions";
export { getClients, getUsers } from "./clientsActions";
export { fetchUser } from "./authActions";
export { signup, login, logout } from "./userActions";
export {
  sendClientRequest,
  acceptRequest,
  shareRoutine
} from "./requestActions";
export {
  getNotifications,
  updateNotificationsRequests
} from "./notificationsActions";

export const getExerciseCategories = () => dispatch => {
  dispatch({ type: ASYNC_START_EXERCISE_CATEGORIES });
  adapter.exercises.getExCas().then(data => {
    dispatch({ type: GET_EXERCISE_CATEGORIES, data });
  });
};
