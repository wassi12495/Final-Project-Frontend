import { combineReducers } from "redux";
import {
  authReducer,
  exerciseCategoryReducer,
  exercisesReducer,
  asyncReducer,
  routineReducer,
  currentWorkoutReducer,
  workoutsReducer,
  clientsReducer
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  exerciseCategories: exerciseCategoryReducer,
  loading: asyncReducer,
  exercises: exercisesReducer,
  currentRoutine: routineReducer,
  currentWorkout: currentWorkoutReducer,
  workouts: workoutsReducer
});

export default rootReducer;
