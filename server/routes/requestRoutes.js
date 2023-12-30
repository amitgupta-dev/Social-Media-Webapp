const express = require('express')
const router = express.Router()
const { createRequest } = require('../controllers/requests/createRequest')
const { getRequests } = require('../controllers/requests/getRequests')
const { updateRequest } = require('../controllers/requests/updateRequest')
// const { deleteRequest } = require('../controllers/requests/deleteRequest')

router.route('/').post(createRequest)
router.route('/').get(getRequests)
router.route('/:id').patch(updateRequest)
// router.route('/:id').delete(deleteRequest)

module.exports = router