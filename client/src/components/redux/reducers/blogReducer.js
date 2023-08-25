import {
    CREATE_BLOG,
    GET_BLOG,
    GET_SINGLE_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG
} from "../action/types";

const initialState = [];

const blogReducer = (state = initialState, action) =>
{
    const {type, payload} = action;

    switch(type) 
    {
        case CREATE_BLOG:
            return [...state, payload];

        case GET_BLOG:
            return payload;
        
        default:
            return state;
    }
    
};

export default blogReducer;