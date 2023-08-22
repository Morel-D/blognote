const initialState = {
    loading: true,
    data: [],
    error: ''
};


const requestReducer = (state = initialState, action) => 
{
    switch(action.type)
    {
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true
            }
        
        case "FETCH_REQUEST_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        
        case "FETCH_REQUEST_ERROR":
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state;
        
    }
}

export default requestReducer;