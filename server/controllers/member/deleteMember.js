const Member = require('../../models/member')
const Group = require('../../models/group')

const deleteMember = async (req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id })

        if (!member) {
            return res.status(404).json({ success: false, message: "Member not found" })
        }

        const group = await Group.findById({ _id: member.group })

        // if member is leaving the group
        if (member.user === req.user.id && member.user !== group.owner) {
            await removeMember(req.params.id, res)
        }

        const authMember = await Member.findOne({ user: req.user.id, group: member.group })

        // if authenticated user is not a member or has the role of a "member"
        if (!authMember || authMember.role === "member") {
            return res.status(403).json({ success: false, message: "unauthorized" })
        }
        // if admin or owner is kicking a member out
        if (member.role === "member" || (member.role === "admin" && authMember.role === "owner")) {
            await removeMember(req.params.id, res)
        }

        throw new Error("Unexpected error occurred")
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}

const removeMember = async (memberId, res) => {
    const deleteResponse = await Member.deleteOne({ _id: memberId })
    return res.json({
        success: true,
        message: "Member deleted successfully",
        deleteResponse
    }).status(200)

}

module.exports = { deleteMember }