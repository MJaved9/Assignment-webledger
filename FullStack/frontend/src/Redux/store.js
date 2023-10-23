import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {AppReducer} from "../Redux/App/AppReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(
  combineReducers({AppReducer}),
  applyMiddleware(thunk)
);

export { store };