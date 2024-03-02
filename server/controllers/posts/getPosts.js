const Post = require('../../models/post')

const getPosts = async (req, res) => {
    try {
        if (req.params.id) {
            const searchedPost = await Post.findById({ _id: req.params.id })
            return res.json({
                success: true,
                message: "post fetched successfully",
                post: searchedPost
            }).status(200)
        }
        else {
            const { postType, createdBy, createdBefore, createdAfter, likedBy, pageSize, pageNo } = req.query

            const filter = {}

            if (postType) { filter.postType = postType }
            if (createdBy) {
                const userIds = createdBy.split(',')
                filter.createdBy = { $in: userIds }
            }
            if (createdBefore) {
                filter.createdAt = { $lt: createdBefore }
            }
            if (createdAfter) {
                filter.createdAt = { $gt: createdAfter }
            }
            if (likedBy) {
                const userIds = likedBy.split(',')
                filter.likedBy = { $in: userIds }
            }

            const limitValue = Number(pageSize) || 30
            const pageNumber = Number(pageNo || "0")
            const skipValue = pageNumber === 0 ? 0 : limitValue * (pageNumber - 1)

            const posts = await Post.find(filter)
                .populate({ path: "createdBy", select: "avatar name" })
                .limit(limitValue)
                .skip(skipValue)
                .exec()

            console.log(posts)
            return res.json({
                success: true,
                message: "post fetched successfully",
                posts
            }).status(200)
        }
    }
    catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { getPosts }