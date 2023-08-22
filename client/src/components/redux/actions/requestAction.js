import axios from "axios"

export const fetch_request = () => 
{
    return {
        type: "FETCH_REQUEST"
    }
}

export const fetch_request_success = (data) => 
{
    return {
        type: "FETCH_REQUEST_SUCCESS",
        payload: data
    }
}

export const fetch_request_error = (error) => 
{
    return {
        type: "FETCH_REQUEST_ERROR",
        payload: error
    }
}

export const fetchData= () => 
{
    return (dispatch) =>
    {
        dispatch(fetch_request);
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            const users = response.data;
            dispatch(fetch_request_success(users));
        })
        .catch((error) => {
            dispatch(fetch_request_error(error))
        })
    } 
}