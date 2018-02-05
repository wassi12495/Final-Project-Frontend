import { combineReducers } from "redux";
import {
  authReducer,
  exerciseCategoryReducer,
  exercisesReducer
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  exerciseCategories: exerciseCategoryReducer,
  exercises: exercisesReducer
});

export default rootReducer;
