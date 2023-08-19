import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";
import requestReducer from "./requestReducer";


const myReducers = combineReducers(
    {
        blog: blogReducer,
        blogRequest: requestReducer
    }
);


export default myReducers;