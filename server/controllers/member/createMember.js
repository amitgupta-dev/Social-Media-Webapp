const Group = require('../../models/group')
const Member = require('../../models/member')

const createMember = async (req, res) => {
    const { userId, groupId } = req.body

    try {
        const searchedGroup = await Group.findById({ _id: groupId })

        if (searchedGroup.joinType === "closed") {
            return res.status(400).json({
                success: false,
                message: "group is closed for joining members"
            })
        }

        if (searchedGroup.joinType === "request" && !(searchedGroup.admins.includes(req.user.id) || searchedGroup.owner === req.user.id)) {
            return res.status(403).json({
                success: false,
                message: "unauthorized"
            })
        }

        const newMember = new Member({
            user: userId,
            role: "member",
            group: groupId,
            createdAt: Date.now()
        })
        const createdMember = await newMember.save()
        return res.status(200).json({
            success: true,
            message: "Member created successfully",
            createdMember
        })
    }
    catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { createMember }