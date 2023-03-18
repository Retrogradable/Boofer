const express = require('express')
const app = express()
const port = 1337

require('dotenv').config()

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const tokenURL = 'https://api.petfinder.com/v2/oauth2/token'
let accessToken = ''

// Get the auth token from Petfinder with Fetch API because who needs Axios anymore xD
const getAuthToken = async () => {
  const res = await fetch(tokenURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`
  })

  if (res.ok) {
    const data = await res.json()
    accessToken = data.access_token
    
    console.log(data)
  } else {
    console.log(`Petfinder API request failed: ${res.status}`)
  }
}


app.get('/', (req, res) => {
  res.send('Hello Doggos!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})