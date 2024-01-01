const express = require('express')
const router = express.Router()
const { createMember } = require('../controllers/member/createMember')
const { getMembers } = require('../controllers/member/getMembers')
// const { updateMember } = require('../controllers/member/updateMember')
const { deleteMember } = require('../controllers/member/deleteMember')

router.route('/').post(createMember)
router.route('/').get(getMembers)
router.route('/:id').get(getMembers)
// router.route('/:id').patch(updateMember)
router.route('/:id').delete(deleteMember)

module.exports = router