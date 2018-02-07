import { combineReducers } from "redux";
import {
  authReducer,
  exerciseCategoryReducer,
  exercisesReducer,
  asyncReducer,
  routineReducer
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  exerciseCategories: exerciseCategoryReducer,
  loading: asyncReducer,
  exercises: exercisesReducer,
  currentRoutine: routineReducer
});

export default rootReducer;
