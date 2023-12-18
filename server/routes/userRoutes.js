const express = require('express')
const router = express.Router()
const { getUser } = require('../controllers/user')
const { login } = require('../controllers/auth/login')
const { logout } = require('../controllers/auth/logout')

router.route('/:id').get(getUser)
router.route('/login').post(login)
router.route('/logout').get(logout)

module.exports = router