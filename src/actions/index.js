import {
  ASYNC_START,
  SET_CURRENT_USER,
  LOGOUT,
  GET_EXERCISE_CATEGORIES,
  GET_USER_WORKOUTS,
  GET_EXERCISES,
  SET_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  POST_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  SET_CURRENT_WORKOUT
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

export const setCurrentWorkout = (
  routine,
  status,
  currentUserId
) => dispatch => {
  dispatch({ type: ASYNC_START });
  const data = {
    workout: {
      routine: routine,
      routine_id: routine.id,
      status: status,
      user_id: currentUserId
    }
  };
  adapter.workouts.initializeWorkout(data).then(res => console.log(res));
  dispatch({ type: SET_CURRENT_WORKOUT, workout: routine, status });
};
