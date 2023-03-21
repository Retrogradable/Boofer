const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the dog data types schema that will go into our DB.
// What do we need?:
// Breed, name, age, gender, size, color, coat length, house-trained, health, good in a home with,
// description, location, contact, images
const dogSchema = new Schema({
    breed: {
        type: String,
        required: true
    },

}, {timeStamps: true})