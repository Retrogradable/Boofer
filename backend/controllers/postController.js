const Post = require('../models/postModel')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().limit(5).orFail()
        return res.json(posts)
    } catch(err) {
        return res.status(404).json({ error: `Error finding posts: ${err.message}.` })
    }
}

const getPost = async (req, res) => {
    const post = req.params

    try {
        const foundPost = await Post.find(post).orFail()
        return res.json(foundPost)
    } catch(err) {
        return res.status(404).json({ error: `Error finding post: ${err.message}.` })
    }
}

const createPost = async (req, res) => {
    const post = req.body

    try {
        await Post.create(post)
        return res.json({ message: 'Post created successfully.' })
    } catch(err) {
        return res.status(500).json({ error: `Failed to create post: ${err.message}.` })
    }
}

const updatePost = async (req, res) => {
    const post = req.params
    const changes = req.body.changes

    try {
        await Post.findOneAndUpdate(post, changes).orFail()
        return res.json({ message: 'Post details updated successfully.' })
    } catch(err) {
        return res.status(500).json({ error: `Failed to update post details: ${err.message}.` })
    }
}

const deletePost = async (req, res) => {
    const post = req.params

    try {
        const result = await Post.findOneAndDelete(post).orFail()
        return res.json({ message: `Post deleted: ${result}` })
    } catch(err) {
        return res.status(500).json({ error: `Failed to update post details: ${err.message}.` })
    }
}

module.exports = { getPost, getPosts, createPost, updatePost, deletePost }