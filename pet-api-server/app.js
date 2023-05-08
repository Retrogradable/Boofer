const express = require('express')
const mongoose = require('mongoose')
const cron = require('node-cron')
require('dotenv').config()

const app = express()
const getAuthToken = require('./getAuthToken')
const getDogData = require('./getDogData')
const formatDogData = require('./formatDogData')
const sendDogData = require('./sendDogData')
const dbRemoveIfAdopted = require('./dbRemoveIfAdopted')
const Dog = require('./models/dogModel')

app.use(express.json())

// Store the results in MongoDB for backend to access.
// Cron runs and will check every day at 11am to update the data in the database if adoption status changes.

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        cron.schedule('0 11 * * *', async () => {

            const date = new Date()
            let minutes = date.getSeconds()
            let hour = date.getHours()
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            
            const dbTotal = await Dog.countDocuments({})

            if(dbTotal <= 500) {
                console.log('cron running.')
                console.log(`Time: ${hour}:${minutes} ${day}-${month}-${year}. Running request to PetFinder API and storing data in DB.`)
                const petToken = await getAuthToken()
                const data = await getDogData(petToken)
                const cleanData = formatDogData(data)
        
                console.log('Sending dog data to DB...')
                sendDogData(cleanData)
            }
        
            console.log(`Time: ${hour}:${minutes} ${day}-${month}-${year}... Checking DB and removing adopted dogs and dogs no longer listed on PetFinder.`)
            dbRemoveIfAdopted(petToken)
            console.log('cron finished.')
        })

        app.listen(process.env.PORT, () => {
            console.log('Listening for requests for dog data on port', process.env.PORT)
        })
    })
    .catch(error => console.log(error))