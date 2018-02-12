import { ASYNC_START, ASYNC_END } from "../actions/types";

export const asyncReducer = (state = false, action) => {
  switch (action.type) {
    case ASYNC_START:
      return true;
    case ASYNC_END:
      return false;
    default:
      return state;
  }
};
