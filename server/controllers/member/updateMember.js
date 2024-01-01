// const Member = require('../../models/member')

// const updateMember = async (req, res) => {

//     try {
//         const { memberId, groupId } = req.query
//         const memberToUpdate = await Member.findOne({ _id: memberId, group: groupId })
//         if (!memberToUpdate) {
//             res.status(404).json({
//                 success: false,
//                 message: "member not found"
//             })
//         }
//         const updater = await Member.findOne({ user: req.user.id })
//         if (searchedMember.user === req.user.id) {

//         }

//         return res.status(200).json({
//             success: true,
//             message: "Member updated successfully",
//             Member: updatedMember
//         })
//     }
//     catch (err) {
//         console.log(err)
//         return res.json({
//             success: false,
//             message: err.message || "something went wrong"
//         })
//     }
// }

// module.exports = { updateMember }