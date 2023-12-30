const mongoose = require('mongoose')
const Comment = require('../../models/comment')

const getComments = async (req, res) => {
    try {
        if (req.params.id) {
            searchedComment = await Comment.findById(req.params.id)
                .populate({
                    path: 'createdBy',
                    select: 'name avatar'
                })
                .exec()

            return res.json({
                success: true,
                message: "Comment fetched successfully",
                Comment: searchedComment
            }).status(200)
        }
        else {
            const { entityId } = req.request

            const searchedComments = await Comment.find({ "entity.entityId": entityId })
                .populate({
                    path: 'createdBy',
                    select: 'name avatar'
                })
                .exec()

            return res.json({
                success: true,
                message: "Comments fetched successfully",
                Comments: searchedComments
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

module.exports = { getComments }