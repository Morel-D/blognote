import { createSlice } from "@reduxjs/toolkit";
import { getBlogList } from "./action";


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
            [getBlogList.fulfilled]: (state) => 
            {
                state.isLoading = false;
                state.isSuccess = true;
                console.log('This is the reducer payload ', state.payload);
                state.data = state.payload;
            },
            [getBlogList.rejected]: (state) =>
            {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = state.payload
            }
        }
    }
)

export default blogSlice.reducer;