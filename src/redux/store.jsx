import { createStore } from "redux";
import combineReducers from "./reducer";
export const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
);
