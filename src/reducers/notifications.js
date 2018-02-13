import { LOGOUT } from "../actions/types";

const initialState = {
  loading: false,
  message: null,
  error: false,
  errorMessages: false
};
export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
