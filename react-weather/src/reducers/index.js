import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const rootRedcuer = combineReducers({
  weatherReducer,
});

export default rootRedcuer;
