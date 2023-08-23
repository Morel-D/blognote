const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: 
        {
            type: String,
            require: true
        },

        content: 
        {
            type: String,
            require: true
        }
    }, 
    {
        timestamps: true
    }
)

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;