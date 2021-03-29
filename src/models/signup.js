const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    number: {
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    hash: {
        type: String,
        required: true,
        trim: true
    },
    salt:{
        type: String,
        required: true,
    }
})

const UserSignup = mongoose.model('UserSignup', userSchema)

module.exports = UserSignup
