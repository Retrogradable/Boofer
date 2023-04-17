const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    colors: {
        type: String,
    },
    attributes: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        email: { type: String },
        phone: { type: String},
        address: { type: String},
        required: true
    },
    photos: {
        data: Buffer,
        contentType: String
    }
}, {timeStamps: true})

module.exports = mongoose.model('Dog', dogSchema)