const Like = require('../../models/like')
const Post = require('../../models/post')
const Comment = require('../../models/comment')

const likeUnlike = async (req, res) => {
    const { entityId, entityType } = req.body

    try {
        const isLiked = await Like.findOne({
            "entity.entityId": entityId,
            "entity.entityType": entityType,
            createdBy: req.user.id
        })
        if (!isLiked) {
            const newLike = new Like({
                entity: {
                    entityId,
                    entityType
                },
                createdBy: req.user.id,
                createdAt: Date.now()
            })
            const createdLike = await newLike.save()

            if (entityType === 'comment') {
                await Comment.findByIdAndUpdate(entityId, { $inc: { likesCount: 1 } }, { new: true })
            }
            if (entityType === 'post') {
                await Post.findByIdAndUpdate(entityId, { $inc: { likesCount: 1 } }, { new: true })
            }

            return res.json({
                success: true,
                message: "liked successfully",
                createdLike
            }).status(200)
        }
        const deleteResponse = await Like.deleteOne({
            createdBy: req.user.id,
            "entity.entityType": entityType,
            "entity.entityId": entityId
        })

        if (entityType === 'comment') {
            await Comment.findByIdAndUpdate(entityId, { $inc: { likesCount: -1 } }, { new: true })
        }
        if (entityType === 'post') {
            await Post.findByIdAndUpdate(entityId, { $inc: { likesCount: -1 } }, { new: true })
        }

        return res.json({
            success: true,
            message: "unliked successfully",
            deleteResponse
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { likeUnlike }