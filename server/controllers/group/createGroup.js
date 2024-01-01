const Group = require('../../models/group')
const Member = require('../../models/member')

const createGroup = async (req, res) => {
    const { cover, avatar, name, hashtags, description, type } = req.body

    const newGroup = new Group({
        avatar,
        cover,
        name,
        hashtags: hashtags.split(','),
        description,
        type,
        owner: req.user.id,
        admins: [],
        createdAt: Date.now()
    })

    try {
        const createdGroup = await newGroup.save()
        const newMember = new Member({
            user: req.user.id,
            role: "owner",
            group: createdGroup._id,
            createdAt: Date.now()
        })
        const createdMember = await newMember.save()

        return res.json({
            success: true,
            message: "Group created successfully",
            createdGroup
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}

module.exports = { createGroup }