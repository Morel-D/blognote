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