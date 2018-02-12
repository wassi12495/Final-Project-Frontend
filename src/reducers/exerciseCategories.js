import { GET_EXERCISE_CATEGORIES } from "../actions/types";

// Handle Exercise Categories
export const exerciseCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXERCISE_CATEGORIES:
      return action.data;
    default:
      return state;
  }
};
