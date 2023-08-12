const blogReducer = (state = 0, action) => {
    
    switch(action.type)
    {
        case "ADD_BLOG":
            return  state + 1;
        
        case "DELETE_BLOG":
            return state - 1;

        case "RESET_BLOG":
            return state = 0;    
        
        default:
            return state;
    }

}
 
export default blogReducer;