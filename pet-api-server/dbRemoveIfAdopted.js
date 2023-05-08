const Dog = require('./models/dogModel')
require('dotenv').config()

// Checks the document ID against PetFinder and removes the dog if it's adoption status has changed.

const dbRemoveIfAdopted = async (authToken) => {
    const dogs = await Dog.find({})
    for(const dog of dogs) {

        const res = await fetch(`https://api.petfinder.com/v2/animals/${dog.petId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            
        let json = await res.json()

        if(typeof json.animal == 'undefined' || json.animal.status != 'adoptable') {
            await Dog.deleteOne({ petId: `${dog.petId}`})
            console.log(`Removed ${dog.name}, id: ${dog._id}... Status was no longer adoptable.`)
        }
    }
}

module.exports = dbRemoveIfAdopted