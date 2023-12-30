const express = require('express')
const router = express.Router()
const { createComment } = require('../controllers/comments/createComment')
const { getComments } = require('../controllers/comments/getComments')
const { updateComment } = require('../controllers/comments/updateComment')
const { deleteComment } = require('../controllers/comments/deleteComment')

router.route('/').post(createComment)
router.route('/').get(getComments)
router.route('/:id').get(getComments)
router.route('/:id').patch(updateComment)
router.route('/:id').delete(deleteComment)

module.exports = router