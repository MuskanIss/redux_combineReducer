import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { todoReducer } from "./todos/todo.reducer";
export default combineReducers({ todo: todoReducer, auth: authReducer });
