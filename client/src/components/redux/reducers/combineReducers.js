import {combineReducers} from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";


export default combineReducers(
    {
        blog: blogReducer
    }
);