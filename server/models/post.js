const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postType: {
        type: String,
        enum: ["text", "image", "video"],
        required: true
    },
    text: {
        type: String,
        required: function () {
            return this.postType === 'text'
        },
    },
    image: {
        type: String,
        required: function () {
            return this.postType === 'image'
        },
    },
    video: {
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
        required: true,
    },
    likes: {
        count: {
            type: Number,
            default: 0,
            required: true
        },
        likedBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    comments: {
        count: {
            type: Number,
            required: true
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }]
    }
})

const Post = new mongoose.model("Post", PostSchema)

module.exports = Post