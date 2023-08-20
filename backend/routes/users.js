const router = require('express').Router()
const userController = require('../controllers/userController')


// User routes.
router.get('/users/', userController.getUsers)
router.get('/users/:userName', userController.getUser)
router.post('/users/', userController.createUser)
router.patch('/users/:userName', userController.updateUser)
router.delete('/users/:userName', userController.deleteUser)

module.exports = router