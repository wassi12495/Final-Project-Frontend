import { adapter } from "../services";
import {
  ASYNC_START_CURRENT_WORKOUT,
  ASYNC_ERROR_CURRENT_WORKOUT,
  SET_CURRENT_WORKOUT
} from "./types";

export const postCurrentWorkout = (data, history) => dispatch => {
  dispatch({ type: ASYNC_START_CURRENT_WORKOUT });
  adapter.currentWorkout.postCurrentWorkout(data).then(res => {
    if (res.errors) {
      dispatch({ type: ASYNC_ERROR_CURRENT_WORKOUT, data: res.errors });
    } else {
      dispatch({ type: SET_CURRENT_WORKOUT, data });
      history.push("/current_workout");
    }
  });
};
