const express = require('express')
const app = express()
const port = 1337

require('dotenv').config()

const apiKey = process.env.API_KEY

app.get('/', (req, res) => {
  res.send('Hello Doggos!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})