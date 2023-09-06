import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogList = createAsyncThunk('getBlogList', async () => {
    try{
        const response = await axios.get('http://localhost:5000/Blog');
    const data = await response.data;
    console.log('The data has been fetch successfully on the action.js ', data);
    return data;
    }catch(error)  {
        console.log('Something is wrong on the action.js part ', error.message); 
    };
});