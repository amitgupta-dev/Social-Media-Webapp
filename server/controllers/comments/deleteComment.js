const Comment = require('../../models/comment')

const deleteComment = async (req, res) => {
    try {
        const deleteResponse = await Comment.deleteOne({ _id: req.params.id, createdBy: req.user.id })

        if (deleteResponse.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "comment not found"
            })
        }

        return res.json({
            success: true,
            message: "Comment deleted successfully",
            deleteResponse
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { deleteComment }