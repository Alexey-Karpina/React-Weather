import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "../reducers/index";

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
