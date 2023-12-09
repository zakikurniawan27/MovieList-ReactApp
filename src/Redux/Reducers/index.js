import { combineReducers } from "@reduxjs/toolkit";
import allmovies1Reducer from "./allmovies1Reducer";
import details1Reducer from "./details1Reducer";
import popularsReducer from "./popularsReducer";

export default combineReducers({
    popular: popularsReducer,
    detail1: details1Reducer,
    detail2: details1Reducer,
    detail3: details1Reducer,
    allMovie1: allmovies1Reducer,
    allMovie2: allmovies1Reducer,
    allMovie3: allmovies1Reducer
})