const express = require('express')
const mongoose = require('mongoose')
const cron = require('node-cron')
require('dotenv').config()

const app = express()
const getAuthToken = require('./getAuthToken')
const getDogData = require('./getDogData')
const formatDogData = require('./formatDogData')
const sendDogData = require('./sendDogData')

app.use(express.json())

// Store the results in MongoDB for backend to access.
// Cron runs once on startup, and will check every day to update the data in the database if adoption status changes.

cron.schedule('* * */1 * *', () => {
    console.log('Running request to PetFinder API and modifying data stored in DB.')
})

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        const petToken = await getAuthToken()
        const data = await getDogData(petToken)
        const cleanData = formatDogData(data)
        
        console.log('Sending dog data to DB...')
        //sendDogData(cleanData)


        app.listen(process.env.PORT, () => {
            console.log('Listening for requests for dog data on port', process.env.PORT)
        })
    })
    .catch(error => console.log(error))