
const addBlog = (req, res) => 
{
    res.json({message : "The data has been added"});
}

const getBlog  = (req, res) =>
{
    res.json({message : "The data has been seen"});
}

const getSingleBlog = (req, res) => 
{
    res.json({message: "Single blog has been added"});
}

const deleteBlog = (req, res) => 
{
    res.json({message: "The blog has been deleted"});
}

const updateBlog = (req, res) => 
{
    res.json({message: "The blog has been updated"})
}

module.exports = 
{
    addBlog,
    getBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
}