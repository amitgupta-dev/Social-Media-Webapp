const Post = require('../../models/post')

const deletePost = async (req, res) => {

    try {
        const deleteResponse = await Post.deleteOne({ _id: req.params.id, createdBy: req.user.id })
        console.log(deleteResponse)
        if (deleteResponse.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "post not found"
            })
        }
        return res.json({
            success: true,
            message: "post deleted successfully",
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { deletePost }