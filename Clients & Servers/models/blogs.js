const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({// schema is the structure of the document
    title: {
        type: String,
        required: true
    }, 
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);  //looks for pluralized model in database
module.exports = Blog;


