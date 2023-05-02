
// Format the data to only include what we need for our model
// because PetFinder doesn't have a GraphQL API -_-
const formatDogData = (data) => {
    let cleanData = []

    // Create new objects with destructuring.
    for(obj in data.animals) {
        let {
            id: petId,
            breeds,
            name,
            age,
            gender,
            size,
            colors,
            attributes,
            environment,
            description,
            contact,
            photos} = data.animals[obj]
        
        cleanData.push({
            petId,
            breeds,
            name,
            age,
            gender,
            size,
            colors,
            attributes,
            environment,
            description,
            contact,
            photos})

    }

    return cleanData
}

module.exports = formatDogData