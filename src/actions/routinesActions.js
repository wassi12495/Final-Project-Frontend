import {
  ASYNC_START_ROUTINES,
  ASYNC_ERROR_ROUTINES,
  GET_ROUTINES
} from "./types";
import { adapter } from "../services";

export const getRoutines = () => dispatch => {
  dispatch({ type: ASYNC_START_ROUTINES });
  adapter.routines.getRoutines().then(data => {
    if (data.errors) {
      dispatch({ type: ASYNC_ERROR_ROUTINES, data: data.errors });
    } else {
      dispatch({ type: GET_ROUTINES, data });
    }
  });
};
