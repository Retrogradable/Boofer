require('dotenv').config()

const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
const TOKEN_URL = 'https://api.petfinder.com/v2/oauth2/token'

// Get the auth token from Petfinder with Fetch API because who needs Axios anymore xD
const getAuthToken = async () => {
  try {
    const res = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
    })

    const data = await res.json()
    const accessToken = data.access_token

    // Check for errors.
    if(res.status != 200) {
      console.log(`Bad token request: ${res.status},  ${res.statusText}.`)
      return null
    } else {
        return accessToken
    }
  } catch (error) {
    console.log(`Error calling Petfinder API: ${error.status} ${error.message}`)
  }
}

module.exports = getAuthToken

// Test
// getAuthToken().then(accessToken => console.log(accessToken))