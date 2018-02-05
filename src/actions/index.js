import {
  ASYNC_START,
  SET_CURRENT_USER,
  LOGOUT,
  ADD_NEW_ROUTINE,
  GET_EXERCISE_CATEGORIES,
  GET_USER_WORKOUTS
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
  dispatch({ type: ADD_NEW_ROUTINE, routine });
};

export const getExerciseCategories = () => dispatch => {
  dispatch({ type: ASYNC_START });
  adapter.exerciseCategories.getExCas().then(data => {
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
