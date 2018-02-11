import {
  ASYNC_START,
  SET_CURRENT_USER,
  LOGOUT,
  GET_EXERCISE_CATEGORIES,
  GET_USER_WORKOUTS,
  GET_EXERCISES,
  ADD_EXERCISE,
  SET_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_NEW_ROUTINE,
  UPDATE_CURRENT_ROUTINE_TITLE,
  POST_NEW_ROUTINE,
  ADD_EXERCISE_TO_CURRENT_ROUTINE,
  SET_CURRENT_WORKOUT,
  GET_CURRENT_WORKOUT,
  NO_CURRENT_WORKOUT,
  ADD_EXERCISE_TO_CURRENT_WORKOUT,
  FINISH_WORKOUT,
  DELETE_CURRENT_WORKOUT
} from "../actions/types";

export const asyncReducer = (state = false, action) => {
  switch (action.type) {
    case ASYNC_START:
      return true;
    default:
      return false;
  }
};
// Handle Authentication
export const authReducer = (state = { currentUser: {} }, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const {
        id,
        username,
        first_name,
        last_name,
        workouts,
        routines,
        currentWorkout,
        is_trainer
      } = action.user;
      return {
        ...state,
        currentUser: {
          id,
          username,
          firstName: first_name,
          lastName: last_name,
          workouts,
          routines,
          currentWorkout,
          is_trainer
        }
      };

    case LOGOUT:
      return { ...state, currentUser: {} };

    default:
      return state;
  }
};

// Handle Exercise Categories
export const exerciseCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXERCISE_CATEGORIES:
      return action.data;
    default:
      return state;
  }
};

// Handle Exercises
export const exercisesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return action.data;
    case ADD_EXERCISE:
      return [...state, action.data];

    default:
      return state;
  }
};

// Handle Routines
export const routineReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_NEW_ROUTINE:
      return action.routine;
    case ADD_EXERCISE_TO_CURRENT_ROUTINE:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          action.data.update,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case UPDATE_CURRENT_NEW_ROUTINE:
      const exercise = state.exercises[action.data.index];
      const e = Object.assign({}, exercise, {
        amt: action.data.update.amt,
        sets: action.data.update.sets
      });
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          e,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case UPDATE_CURRENT_ROUTINE_TITLE:
      return { ...state, title: action.title };
    case POST_NEW_ROUTINE:
      return {};
    default:
      return state;
  }
};

// Handle Current Workout
export const currentWorkoutReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_WORKOUT:
      return action.data;
    case GET_CURRENT_WORKOUT:
      return action.data;
    case NO_CURRENT_WORKOUT:
      return null;
    case FINISH_WORKOUT:
      return null;
    case ADD_EXERCISE_TO_CURRENT_WORKOUT:
      return {
        ...state,
        exercises: [
          ...state.exercises.slice(0, action.data.index),
          action.data.update,
          ...state.exercises.slice(action.data.index + 1)
        ]
      };
    case DELETE_CURRENT_WORKOUT:
      return null;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

// Handle Workouts
export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_WORKOUTS:
      return action.workouts;
    case FINISH_WORKOUT:
      return [...state, action.data];
    default:
      return state;
  }
};

// TODO: Determine if I need to store routines in state (probs not)
// export const routinesReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_NEW_ROUTINE:
//       return [...state, action.routine];
//     default:
//       return state;
//   }
// };
