import { combineReducers } from "redux";
import {
  authReducer,
  exerciseCategoryReducer,
  exercisesReducer,
  asyncReducer,
  routineReducer,
  currentWorkoutReducer
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  exerciseCategories: exerciseCategoryReducer,
  loading: asyncReducer,
  exercises: exercisesReducer,
  currentRoutine: routineReducer,
  currentWorkout: currentWorkoutReducer
});

export default rootReducer;
