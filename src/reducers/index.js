import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { exerciseCategoryReducer } from "./exerciseCategories";
import { exercisesReducer } from "./exercises";
import { routinesReducer } from "./routines";
import { currentWorkoutReducer } from "./currentWorkout";
import { workoutsReducer } from "./workouts";
import { clientsReducer } from "./clients";

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  exerciseCategories: exerciseCategoryReducer,
  exercises: exercisesReducer,
  routines: routinesReducer,
  currentWorkout: currentWorkoutReducer,
  workouts: workoutsReducer
});

export default rootReducer;
