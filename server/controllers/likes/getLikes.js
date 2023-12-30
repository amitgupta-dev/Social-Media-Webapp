const Like = require('../../models/like')

const getLikes = async (req, res) => {
    try {
        const { entityId } = req.query
        const searchedLikes = await Like.find({ "entity.entityId": entityId })
            .populate({
                path: 'createdBy',
                select: 'name avatar'
            })
            .exec()
        return res.json({
            success: true,
            message: "Likes fetched successfully",
            Likes: searchedLikes
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { getLikes }