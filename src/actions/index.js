import {
  ASYNC_START,
  SET_CURRENT_USER,
  LOGOUT,
  GET_EXERCISE_CATEGORIES,
  GET_USER_WORKOUTS,
  GET_EXERCISES,
  ADD_EXERCISE,
  SET_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  POST_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  SET_CURRENT_WORKOUT,
  GET_CURRENT_WORKOUT,
  NO_CURRENT_WORKOUT,
  FINISH_WORKOUT
} from "./types";
import { adapter } from "../services";

export const fetchUser = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: SET_CURRENT_USER, user });
  });
};

export const createNewUser = (user, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.users.signup(user).then(res => console.log(res));

  // return { type: CREATE_NEW_USER, user };
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.login({ username, password }).then(user => {
    console.log("Login User", user);
    localStorage.setItem("token", user.jwt);
    dispatch({ type: SET_CURRENT_USER, user });
    history.push("/profile");
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};

export const addRoutine = routine => dispatch => {
  dispatch({ type: POST_NEW_ROUTINE });
};

export const getExerciseCategories = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.exercises.getExCas().then(data => {
    dispatch({ type: GET_EXERCISE_CATEGORIES, data });
  });
};

export const getWorkouts = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.auth.getWorkouts().then(data => {
    const workouts = data.workouts;
    dispatch({ type: GET_USER_WORKOUTS, workouts });
  });
};

export const getExercises = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.exercises.getExercises().then(data => {
    dispatch({ type: GET_EXERCISES, data });
  });
};

export const addExercise = data => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.exercises.addExercise(data).then(data => {
    dispatch({ type: ADD_EXERCISE, data });
  });
};

export const setCurrentNewRoutine = routine => dispatch => {
  dispatch({ type: SET_CURRENT_NEW_ROUTINE, routine });
};

export const updateCurrentNewRoutine = data => dispatch => {
  dispatch({ type: UPDATE_CURRENT_NEW_ROUTINE, data });
};
export const addExerciseToCurrentNewRoutine = data => dispatch => {
  dispatch({ type: ADD_EXERCISE_TO_CURRENT_ROUTINE, data });
};

export const updateCurrentRoutineTitle = title => dispatch => {
  dispatch({ type: UPDATE_CURRENT_ROUTINE_TITLE, title });
};

export const setCurrentWorkout = data => dispatch => {
  dispatch({ type: SET_CURRENT_WORKOUT, data });
};

export const getCurrentWorkout = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.workouts.getCurrentWorkout().then(data => {
    if (data.error) {
      dispatch({ type: NO_CURRENT_WORKOUT });
    } else {
      dispatch({ type: GET_CURRENT_WORKOUT, data });
    }
  });
};

export const finishWorkout = data => dispatch => {
  dispatch({ type: ASYNC_START });
  console.log(data);
  adapter.workouts.completeCurrentWorkout(data).then(res => {
    dispatch({ type: FINISH_WORKOUT, data: res });
  });
};
