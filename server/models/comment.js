const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now(),
        required: true,
    },
    updatedAt: {
        type: Number,
        default: Date.now(),
        required: true,
    },
    likesCount: {
        type: Number,
        default: 0,
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment