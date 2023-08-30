import { createSlice } from "@reduxjs/toolkit";

const initialState =  [];

const blogReducer = createSlice(
    {
        name: "Blog",
        initialState,
        reducers: {
            addBlog: (state, action) => 
            {
                state.push(action.payload);
                return state;
            }
        }
    }
);

export const { addBlog } = blogReducer.actions;
export  const reducer = blogReducer.reducer;