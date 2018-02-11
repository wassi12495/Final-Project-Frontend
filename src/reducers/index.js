import { combineReducers } from "redux";
import {
  authReducer,
  exerciseCategoryReducer,
  exercisesReducer,
  asyncReducer,
  currentRoutineReducer,
  currentWorkoutReducer,
  workoutsReducer,
  clientsReducer,
  routinesReducer
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  exerciseCategories: exerciseCategoryReducer,
  loading: asyncReducer,
  exercises: exercisesReducer,
  currentRoutine: currentRoutineReducer,
  routines: routinesReducer,
  currentWorkout: currentWorkoutReducer,
  workouts: workoutsReducer
});

export default rootReducer;
