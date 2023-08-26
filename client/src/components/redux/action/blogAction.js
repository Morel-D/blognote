import {
    CREATE_BLOG,
    GET_BLOG,
    GET_SINGLE_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG
} from "../action/types";

import blogService from "../service/blogService";

export const addBlog = (title, content) => async (dispatch) => 
{
    try {
        const res = await blogService.add({title, content});

        dispatch({
            type: CREATE_BLOG,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch(error) {
        return Promise.reject(error)
    }
}


export const getBlogs = () => async (dispatch) => 
{
    try {
        const res = await blogService.get();
        // console.log("The get acion here is ", res.data);

        dispatch(
            {
                type: GET_BLOG,
                paylaod: res.data
            }

        );
    } catch(err) {
        console.log(err)
    }

}
