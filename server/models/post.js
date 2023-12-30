const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postType: {
        type: String,
        enum: ["text", "image", "video", "reel", "story"],
        required: true
    },
    visibility: {
        type: String,
        enum: ["private", "public"],
        required: true
    },
    text: {
        type: String,
        required: function () {
            return this.postType === 'text'
        },
    },
    imageUrl: {
        type: String,
        required: function () {
            return this.postType === 'image'
        },
    },
    videoUrl: {
        type: String,
        required: function () {
            return this.postType === 'video'
        },
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now(),
        required: true
    },
    updatedAt: {
        type: Number,
        default: Date.now(),
        required: true
    },
    likesCount: {
        type: Number,
        default: 0,
        required: true
    },
    commentsCount: {
        type: Number,
        default: 0,
        required: true
    }
})

const Post = new mongoose.model("Post", PostSchema)

module.exports = Post