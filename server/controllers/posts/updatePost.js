const Post = require('../../models/post')

const updatePost = async (req, res) => {
    const { text, imageUrl, videoUrl } = req.body

    try {
        let searchedPost = await Post.findById({ _id: req.params.id })

        console.log(searchedPost)

        if (searchedPost.createdBy != req.user.id) {
            return res.json({
                success: false,
                message: "Unauthorized",
            }).status(403)
        }

        if (text) { searchedPost.text = text }

        if (searchedPost.type === 'image' && imageUrl) {
            searchedPost.imageUrl = imageUrl
        }
        if (searchedPost.type === 'video' && videoUrl) {
            searchedPost.videoUrl = videoUrl
        }

        const updatedPost = await searchedPost.save()

        return res.json({
            success: true,
            message: "post updated successfully",
            updatedPost
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message || "something went wrong"
        }).status(500)
    }
}

module.exports = { updatePost }