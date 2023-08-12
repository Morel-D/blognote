import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";


const myReducers = combineReducers(
    {
        blog: blogReducer
    }
);


export default myReducers;