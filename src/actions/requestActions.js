import { ASYNC_START_REQUEST, REQUEST_SENT, ACCEPT_REQUEST } from "./types";
import { adapter } from "../services";

export const sendClientRequest = data => dispatch => {
  dispatch({ type: ASYNC_START_REQUEST });
  adapter.requests.sendClientRequest(data).then(res => {
    dispatch({ type: REQUEST_SENT, data: res.message });
  });
};

export const acceptRequest = data => dispatch => {
  dispatch({ type: ASYNC_START_REQUEST });
  adapter.requests.acceptRequest(data).then(res => {
    dispatch({ type: ACCEPT_REQUEST, data: res.message });
  });
};
