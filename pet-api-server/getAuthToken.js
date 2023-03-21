require('dotenv').config()

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const tokenURL = 'https://api.petfinder.com/v2/oauth2/token'

// Get the auth token from Petfinder with Fetch API because who needs Axios anymore xD
const getAuthToken = async () => {
  try {
    const res = await fetch(tokenURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`
    })

    const data = await res.json()
    const accessToken = data.access_token

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