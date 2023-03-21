const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require('mongoose')


// Get the auth token and make a request to the API.
const authToken = require('./getAuthToken')
authToken().then(token => console.log(token))

// Store the results in MongoDB for backend to access.
// Script will check every day and update the data in the database if adoption status changes.

mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // Listen for requests after connecting to DB.
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch(error => console.log(error))