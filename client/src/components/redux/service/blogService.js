import http from "../service/http-common";

const getBlog = () => 
{
    return http.get('/')
}

const getSingleBlog = (id) => 
{
    return http.get('/edit/'+id)
}

const addBlog = (data) => 
{
    return http.post('/add', data)
}

const updateBlog = (id, data) => 
{
    return http.put('/edit/'+id, data)
}

const deleteBlog = (id) =>
{
    return http.delete('/'+id)
}


const blogService = 
{
    getBlog, getSingleBlog, addBlog, updateBlog, deleteBlog
}

export default blogService;