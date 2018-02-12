import { adapter } from "../services";
import { GET_CLIENTS, ASYNC_START_CLIENTS } from "./types";

export const getClients = () => dispatch => {
  dispatch({ type: ASYNC_START_CLIENTS });
  adapter.clients.getClients().then(data => {
    dispatch({ type: GET_CLIENTS, data });
  });
};
