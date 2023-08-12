// action creator for adding a blog number
export const increment = () =>  
{
    return {
        type: "ADD_BLOG"
    };
};


// action creator for decrementing a blog number
export const decrement = () => 
{
    return {
        type: "DELETE_BLOG"
    };
};

export const reset = () => 
{
    return {
        type: "RESET_BLOG"
    };
};

