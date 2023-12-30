const Comment = require('../../models/comment')
const Post = require('../../models/post')

const createComment = async (req, res) => {
    const { entityType, entityId, comment } = req.body

    const newComment = new Comment({
        entity: {
            entityType,
            entityId
        },
        comment,
        createdBy: req.user.id,
        createdAt: Date.now(),
        updatedAt: Date.now()
    })

    try {

        const createdComment = await newComment.save()

        if (entityType === 'comment') {
            await Comment.findByIdAndUpdate(entityId, { $inc: { commentsCount: 1 } }, { new: true })
        }
        if (entityType === 'post') {
            await Post.findByIdAndUpdate(entityId, { $inc: { commentsCount: 1 } }, { new: true })
        }

        return res.json({
            success: true,
            message: "Comment created successfully",
            createdComment
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { createComment }