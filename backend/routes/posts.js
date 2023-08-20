const router = require('express').Router()
const postController = require('../controllers/postController')

// Post routes.
router.get('/posts/', postController.getPosts)
router.get('/posts/:postId', postController.getPost)
router.post('/posts/', postController.createPost)
router.patch('/posts/:postId', postController.updatePost)
router.delete('/posts/:postId', postController.deletePost)

module.exports = router