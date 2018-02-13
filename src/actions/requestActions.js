import {
  ASYNC_START_REQUEST,
  ASYNC_ERROR_REQUEST,
  GET_REQUESTS
} from "./types";
import { adapter } from "../services";

export const requestClient = data => dispatch => {
  debugger;
  dispatch({ type: ASYNC_START_REQUEST });
  adapter.requests.requestClient(data).then(res => {
    debugger;
  });
};
