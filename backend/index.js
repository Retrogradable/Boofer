const express = require('express')
const app = express()
const dotenv = require('dotenv')
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/ApiErrorHandler')

dotenv.config()
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', postRoutes)

app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI, { dbName: 'Users' })
    .then(async () => {
        app.listen(process.env.PORT, () => {
            console.log(`Backend server is running on ${process.env.PORT}`)
        })
    })
