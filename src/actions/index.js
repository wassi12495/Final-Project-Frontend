import {
  ASYNC_START,
  ASYNC_END,
  SET_CURRENT_USER,
  LOGOUT,
  GET_EXERCISE_CATEGORIES,
  ADD_EXERCISE_TO_CURRENT_WORKOUT,
  FINISH_WORKOUT,
  DELETE_CURRENT_WORKOUT,
  GET_CLIENTS
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
  deleteCurrentWorkout
} from "./currentWorkoutActions";

export const endLoading = () => dispatch => {
  dispatch({ type: ASYNC_END });
};

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.login({ username, password }).then(user => {
    console.log("Login User", user);
    localStorage.setItem("token", user.jwt);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/");
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};

export const getExerciseCategories = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.exercises.getExCas().then(data => {
    dispatch({ type: GET_EXERCISE_CATEGORIES, data });
  });
};

export const finishWorkout = data => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.workouts.completeCurrentWorkout(data).then(res => {
    dispatch({ type: FINISH_WORKOUT, data: res });
  });
};

export const getClients = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.clients.getClients().then(res => {
    dispatch({ type: GET_CLIENTS, data: res });
  });
};
