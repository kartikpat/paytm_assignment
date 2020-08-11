import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducer } from "./utils/rootReducer";

export default createStore(combineReducers(rootReducer), applyMiddleware(thunk));