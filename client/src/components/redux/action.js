let actionBlog = 
{
    addBlog: function(content)
    {
        return {
            type: 'ADD_BLOG',
            content: content
        }
    },

    deleteBlog: function(id)
    {
        return {
            type: 'DELETE_BLOG',
            id: id
        }
    }
}

export default actionBlog;