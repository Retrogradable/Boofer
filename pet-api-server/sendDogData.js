const mongoose = require('mongoose')
const Dog = require('./models/dogModel')

// Data needs to be structured properly first and then passed into this function to go to the DB.
const sendDogData = async (data) => {
    try {
        const dog = await Dog.create(data)
    } catch (error) {
        console.log(error.message)
    }
}