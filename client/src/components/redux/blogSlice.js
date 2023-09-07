import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, addBlogList } from "./action";


const initiialState = 
{
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: null
}


export const blogSlice = createSlice(
    {
        name: 'blog',
        initialState: initiialState,
        extraReducers: {
            [getBlogList.pending]: (state) => 
            {
                state.isLoading = true;
            },
            [getBlogList.fulfilled]: (state, action) => 
            {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            },
            [getBlogList.rejected]: (state, action) =>
            {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload
            },

            [addBlogList.fulfilled]: (state, action) =>
            {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.push(action.payload)
            },
            [addBlogList.rejected]: (state, action) => 
            {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload
            }
            
        }
    }
)

export default blogSlice.reducer;