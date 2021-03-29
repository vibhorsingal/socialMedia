const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    }
})

const PostsModel = new mongoose.model('PostsModel', postSchema)

module.exports = PostsModel