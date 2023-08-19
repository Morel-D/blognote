const initialState = {
    loading: true,
    data: [],
    errror: ''
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
        
    }
}

export default requestReducer;