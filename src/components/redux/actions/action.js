const ADD_BLOG = "ADD_BLOG";
const DELETE_BLOG = "DELETE_BLOG";

// action creator for adding a blog number
export const increment = () =>  
{
    return {
        type: ADD_BLOG
    };
};


// action creator for decrementing a blog number
export const decrement = () => 
{
    return {
        type: DELETE_BLOG
    };
};

