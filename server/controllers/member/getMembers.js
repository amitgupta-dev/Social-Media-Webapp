const Member = require('../../models/member')

const getMembers = async (req, res) => {
    try {
        const { groupId } = req.query
        if (req.params.id) {
            searchedMember = await Member.findOne({ _id: req.params.id, group: groupId })
                .populate({
                    path: 'user',
                    select: 'name avatar'
                })
                .exec()

            if (!searchedMember) {
                return res.json({
                    success: false,
                    message: "Member not found",
                    Member: searchedMember
                }).status(404)
            }

            return res.json({
                success: true,
                message: "Member fetched successfully",
                Member: searchedMember
            }).status(200)
        }
        else {
            const { user, role, group } = req.query

            const filter = {}

            if (user) {
                filter.user = user
            }

            if (role) {
                filter.role = role
            }

            if (group) {
                filter.group = group
            }

            const searchedMembers = await Member.find(filter)
                .populate({
                    path: 'user',
                    select: 'name avatar'
                })
                .exec()

            if (searchedMembers.length === 0) {
                return res.json({
                    success: false,
                    message: "Member match not found",
                    Members: searchedMembers
                }).status(404)
            }

            return res.json({
                success: true,
                message: "Members fetched successfully",
                Members: searchedMembers
            }).status(200)
        }
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { getMembers }