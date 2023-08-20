const User = require('../models/userModel')


const getUsers = async (req, res, next) => {
        try {
            const users = await User.find({}).orFail()
            return res.json(users)
        } catch(err) {
            next(err)
        }
}

const getUser = async (req, res, next) => {
    const name = req.params

    try {
        const foundUser = await User.find(name).orFail()
        return res.json(foundUser)
    } catch(err) {
        next(err)
    }
}

const createUser = async (req, res, next) => {
    const name = req.body

    try {
        await User.create(name)
        return res.json({ message: 'User created successfully.' })
    } catch(err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    const name = req.params
    const changes = req.body.changes

    try {
        await User.findOneAndUpdate(name, changes).orFail()
        return res.json({ message: 'User details updated successfully.' })
    } catch(err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    const name = req.params

    try {
        const result = await User.findOneAndDelete(name).orFail()
        return res.json({ message: `User deleted: ${result}` })
    } catch(err) {
        next(err)
    }
}

module.exports = {getUser, getUsers, createUser, updateUser, deleteUser}