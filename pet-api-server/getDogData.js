require('dotenv').config()

// Get the auth token and make a request to the API.

const getDogData = async (authToken) => {
    const url = 'https://api.petfinder.com/v2/animals?type=dog&status=adoptable'

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    
    let json = await res.json()

    return json
}

module.exports = getDogData