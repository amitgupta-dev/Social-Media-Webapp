const express = require('express')
const router = express.Router()
const { signup } = require('../controllers/auth/signup')
const { login } = require('../controllers/auth/login')
const { logout } = require('../controllers/auth/logout')

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)

module.exports = router