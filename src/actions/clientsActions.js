import { adapter } from "../services";
import {
  GET_USERS,
  GET_CLIENTS,
  SEND_REQUEST,
  ASYNC_START_CLIENTS
} from "./types";

export const getClients = () => dispatch => {
  dispatch({ type: ASYNC_START_CLIENTS });
  adapter.clients.getClients().then(data => {
    dispatch({ type: GET_CLIENTS, data });
  });
};

export const getUsers = () => dispatch => {
  dispatch({ type: ASYNC_START_CLIENTS });
  adapter.clients.getUsers().then(res => {
    dispatch({ type: GET_USERS, data: res });
  });
};

export const addClientRequest = data => dispatch => {
  dispatch({ type: ASYNC_START_CLIENTS });
  adapter.clients.addClientRequest(data).then(res => {
    dispatch({ type: SEND_REQUEST });
  });
};
