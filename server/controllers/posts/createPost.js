const Post = require('../../models/post')

const createPost = async (req, res) => {
    const { postType, visibility, text, imageUrl, videoUrl } = req.body

    const newPost = new Post({
        postType,
        visibility: visibility || "public",
        text,
        imageUrl,
        videoUrl,
        createdBy: req.user.id,
        createdAt: Date.now(),
        updatedAt: Date.now()
    })

    try {
        const createdPost = await newPost.save()
        return res.json({
            success: true,
            message: "post created successfully",
            createdPost
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { createPost }