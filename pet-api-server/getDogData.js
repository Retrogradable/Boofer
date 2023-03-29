const mongoose = require('mongoose')
const authToken = require('./getAuthToken')

require('dotenv').config()

// Get the auth token and make a request to the API.

const getDogData = async () => {
    const url = 'https://api.petfinder.com/v2/animals?type=dog&status=adoptable'
    let token = await authToken()

    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(token)
}

module.exports = petFinderFetch