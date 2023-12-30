const express = require('express')
const router = express.Router()
const { createPost } = require('../controllers/posts/createPost')
const { getPosts } = require('../controllers/Posts/getPosts')
const { updatePost } = require('../controllers/Posts/updatePost')
const { deletePost } = require('../controllers/Posts/deletePost')

router.route('/').post(createPost)
router.route('/').get(getPosts)
router.route('/:id').get(getPosts)
router.route('/:id').patch(updatePost)
router.route('/:id').delete(deletePost)

module.exports = router