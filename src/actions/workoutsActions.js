import {
  ASYNC_START_WORKOUTS,
  ASYNC_ERROR_WORKOUTS,
  GET_USER_WORKOUTS
} from "./types";
import { adapter } from "../services";

export const getWorkouts = () => dispatch => {
  dispatch({ type: ASYNC_START_WORKOUTS });
  adapter.auth.getWorkouts().then(data => {
    dispatch({ type: GET_USER_WORKOUTS, data: data.workouts });
  });
};
