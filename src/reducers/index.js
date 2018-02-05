import { combineReducers } from "redux";
import { authReducer, exerciseCategoryReducer } from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  exerciseCategories: exerciseCategoryReducer
});

export default rootReducer;
