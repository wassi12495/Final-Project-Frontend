import { ASYNC_START } from "../actions/types";

export const asyncReducer = (state = false, action) => {
  switch (action.type) {
    case ASYNC_START:
      return true;

    default:
      return state;
  }
};
