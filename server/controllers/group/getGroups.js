const Group = require('../../models/group')

const getGroups = async (req, res) => {
    try {
        if (req.params.id) {
            searchedGroup = await Group.findById(req.params.id)
                .populate({
                    path: 'owner',
                    select: {
                        path: 'user',
                        select: 'name avatar'
                    }
                })
                .populate({
                    path: 'admins',
                    select: {
                        path: 'user',
                        select: 'name avatar'
                    }
                })
                .exec()

            if (!searchedGroup) {
                return res.json({
                    success: false,
                    message: "Group not found",
                    Group: searchedGroup
                }).status(404)
            }

            return res.json({
                success: true,
                message: "Group fetched successfully",
                Group: searchedGroup
            }).status(200)
        }
        else {
            const { name, hashtags, type, owner, admins } = req.query

            let filter = {}

            if (name) {
                filter = {
                    name: {
                        $regex: new RegExp(`\\b${name}\\b`, 'i')
                    }
                }
            }

            if (hashtags) {
                filter.hashtags = { $in: hashtags }
            }

            if (type) {
                filter.type = type
            }

            if (owner) {
                filter.owner = owner
            }

            if (admins) {
                filter.admins = { $in: admins }
            }

            const searchedGroups = await Group.find(filter)

            if (searchedGroups.length === 0) {
                return res.json({
                    success: false,
                    message: "Group match not found",
                    Groups: searchedGroups
                }).status(404)
            }

            return res.json({
                success: true,
                message: "Groups fetched successfully",
                Groups: searchedGroups
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

module.exports = { getGroups }