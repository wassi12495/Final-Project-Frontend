import {
  ASYNC_START_NOTIFICATIONS,
  // ASYNC_ERROR_NOTIFICATIONS,
  GET_NOTIFICATIONS,
  ACCEPT_REQUEST_UPDATE_NOTIFICATIONS
} from "./types";
import { adapter } from "../services";

export const getNotifications = () => dispatch => {
  dispatch({ type: ASYNC_START_NOTIFICATIONS });
  adapter.notifications.getNotifications().then(res => {
    dispatch({ type: GET_NOTIFICATIONS, data: res });
  });
};

export const updateNotificationsRequests = index => dispatch => {
  dispatch({ type: ACCEPT_REQUEST_UPDATE_NOTIFICATIONS, index });
};
