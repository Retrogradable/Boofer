const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    petId: Number,
    breeds: { type: {} },
    name: String,
    age: String,
    gender: String,
    size: String,
    colors: { type: {} },
    attributes: { type: {} },
    environment: { type: {} },
    description: String,
    contact: { type: {} },
    photos: { type: [] }
}, {timeStamps: true})

const dogDb = mongoose.connection.useDb('Dogs')
module.exports = dogDb.model('Dog', userSchema)