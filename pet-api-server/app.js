const express = require('express')
const mongoose = require('mongoose')
const cron = require('node-cron')
require('dotenv').config()

const app = express()
const petFinderFetch = require('./getDogData')

app.use(express.json())

// Store the results in MongoDB for backend to access.
// Script will check every day and update the data in the database if adoption status changes.

// cron.schedule('* * */1 * *', () => {
//     console.log('Running request to PetFinder API and modifying data stored in DB.')
// })

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        getDogData()
        // Listen for requests for dog data after connecting to DB.
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch(error => console.log(error))