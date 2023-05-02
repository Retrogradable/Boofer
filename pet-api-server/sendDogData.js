const Dog = require('./models/dogModel')

// Create DB documents.
const sendDogData = async (data) => {
    removeIfExists(data)
    try {
        const dog = await Dog.create(data)
    } catch (error) {
        console.log(error.message)
    }
}

// Helper function to check if the document exists in the DB and remove the object from our data before sending.
const removeIfExists = async (dataToCheck) => {
    
    for(i in dataToCheck) {
        let exists = await Dog.exists(dataToCheck[i])
        
        // DB will return null if the document doesn't exist. Remove it if it does.
        if(exists) {
            dataToCheck = dataToCheck.splice(i, 1)
        }
    }
}


module.exports = sendDogData