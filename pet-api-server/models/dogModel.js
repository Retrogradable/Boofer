const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    breed: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
    color: {
        type: String,
    },
    coatLength: {
        type: String,
    },
    gender: {
        type: String,
        required: true
    },
    houseTrained: {
        type: String,
    },
    health: {
        type: String,
        required: true
    },
    goodInHomeWith: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        email: { type: String },
        phone: { type: String},
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },

}, {timeStamps: true})

module.exports = mongoose.model('Dog', dogSchema)