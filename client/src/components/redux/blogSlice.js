import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, addBlogList, getSingleBlog, deleteSingleBlog } from "./action";


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
            // Get The data
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

            // POST The data
        
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
            },
            
            // GET single data

            [getSingleBlog.fulfilled]: (state, action) => 
            {
                state.isLoading = false;
                state.isSuccess = true;
                const id = action.payload;
                state.data.find(item => item.id === id);
            },

            [getSingleBlog.rejected]: (state, action) =>
            {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
            },

            // DELETE single data

            [deleteSingleBlog.fulfilled]: (state, action) => 
            {
                state.isLoading = false;
                state.isSuccess = true;
                const id = action.payload;
                state.data.filter(item => item.id !== id)
            }
        }
    }
)

export default blogSlice.reducer;