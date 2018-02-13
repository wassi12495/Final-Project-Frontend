import {
  ASYNC_START_NOTIFICATIONS,
  ASYNC_ERROR_NOTIFICATIONS,
  GET_NOTIFICATIONS
} from "./types";
import { adapter } from "../services";

export const getNotifications = () => dispatch => {
  dispatch({ type: ASYNC_START_NOTIFICATIONS });
  adapter.notifications.getNotifications().then(res => {
    debugger;
  });
};
