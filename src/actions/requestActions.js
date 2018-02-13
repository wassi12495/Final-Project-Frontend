import {
  ASYNC_START_REQUEST,
  ASYNC_ERROR_REQUEST,
  GET_REQUESTS,
  REQUEST_SENT
} from "./types";
import { adapter } from "../services";

export const sendClientRequest = data => dispatch => {
  dispatch({ type: ASYNC_START_REQUEST });
  adapter.requests.sendClientRequest(data).then(res => {
    dispatch({ type: REQUEST_SENT, data: res.message });
  });
};
