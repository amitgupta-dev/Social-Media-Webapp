const Comment = require('../../models/comment')

const updateComment = async (req, res) => {
    try {
        const searchedComment = await Comment.findById({ _id: req.params.id, createdBy: req.user.id })

        if (!searchedComment) return res.status(404).json({
            success: false,
            message: 'Comment not found'
        })

        const { comment } = req.body

        if (comment) searchedComment.comment = comment

        searchedComment.updatedAt = Date.now()

        let updatedComment = await searchedComment.save()

        console.log(updatedComment)

        return res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            Comment: updatedComment
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

module.exports = { updateComment }