const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    likes: {
        count: {
            type: Number,
            required: true
        },
        users: [{
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        }]
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        mediaUri: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        }
    }
}, { timestamps: true })

const postDb = mongoose.connection.useDb('Posts')
module.exports = postDb.model('Post', postSchema)