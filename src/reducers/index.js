import { combineReducers } from "redux";
import { authReducer, routinesReducer } from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  routines: routinesReducer
});

export default rootReducer;
