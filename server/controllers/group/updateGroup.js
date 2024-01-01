const Group = require('../../models/group')

const updateGroup = async (req, res) => {

    try {
        const searchedGroup = await Group.findOne({
            _id: req.params.id,
            $or: [
                { owner: req.user.id },
                { admins: req.user.id }
            ]
        })

        if (!searchedGroup) return res.status(404).json({
            success: false,
            message: 'unauthorized'
        })

        const { cover, avatar, name, hashtags, description, type } = req.body

        if (cover) {
            searchedGroup.cover = cover
        }
        if (avatar) {
            searchedGroup.avatar = avatar
        }
        if (name) {
            searchedGroup.name = name
        }
        if (hashtags) {
            searchedGroup.hashtags = hashtags.split(',')
        }
        if (description) {
            searchedGroup.description = description
        }
        if (type) {
            searchedGroup.type = type
        }
        if (type) {
            searchedGroup.type = type
        }
        searchedGroup.updatedAt = Date.now()

        let updatedGroup = await searchedGroup.save()

        console.log(updatedGroup)

        return res.status(200).json({
            success: true,
            message: "Group updated successfully",
            Group: updatedGroup
        })
    }
    catch (err) {
        console.log(err)
        return res.json({
            success: false,
            message: err.message || "something went wrong"
        })
    }
}

module.exports = { updateGroup }