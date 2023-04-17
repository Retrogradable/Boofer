const getAuthToken = require('./getAuthToken')

require('dotenv').config()

// Get the auth token and make a request to the API.

const getDogData = async () => {
    const url = 'https://api.petfinder.com/v2/animals?type=dog&status=adoptable'
    let token = await getAuthToken()

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    let json = await res.json()

    return json
}

module.exports = getDogData