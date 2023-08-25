import http from "../service/http-common";

const get = () => 
{
    return http.get('/')
}

const getID = (id) => 
{
    return http.get('/edit/'+id)
}

const add = (data) => 
{
    return http.post('/add', data)
}

const update = (id, data) => 
{
    return http.put('/edit/'+id, data)
}

const remove = (id) =>
{
    return http.delete('/'+id)
}


const blogService = 
{
    get, getID, add, update, remove
}

export default blogService;