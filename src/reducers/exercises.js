import { GET_EXERCISES, ADD_EXERCISE, LOGOUT } from "../actions/types";

// Handle Exercises
export const exercisesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return action.data;
    case ADD_EXERCISE:
      const exercise = Object.assign({}, action.data, {
        exercise_category_id: action.data.exercise_category.id
      });
      return {
        seed_exercises: state.seed_exercises,
        user_exercises: [...state.user_exercises, exercise]
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
