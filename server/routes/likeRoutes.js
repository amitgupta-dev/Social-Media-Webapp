const express = require('express')
const router = express.Router()
const { likeUnlike } = require('../controllers/Likes/likeUnlike')
const { getLikes } = require('../controllers/Likes/getLikes')

router.route('/').post(likeUnlike)
router.route('/').get(getLikes)

module.exports = router