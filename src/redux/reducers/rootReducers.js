import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'

// console.log("rootReducers ver");

const rootReducers = combineReducers({
    moviesReducer,
});

export default rootReducers;