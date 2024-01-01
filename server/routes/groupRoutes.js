const express = require('express')
const router = express.Router()
const { createGroup } = require('../controllers/group/createGroup')
const { getGroups } = require('../controllers/group/getGroups')
const { updateGroup } = require('../controllers/group/updateGroup')
const { deleteGroup } = require('../controllers/group/deleteGroup')

router.route('/').post(createGroup)
router.route('/').get(getGroups)
router.route('/:id').get(getGroups)
router.route('/:id').patch(updateGroup)
router.route('/:id').delete(deleteGroup)

module.exports = router