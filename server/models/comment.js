const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    entity: {
        entityType: {
            type: String,
            enum: ['comment', 'post'],
            required: true
        },
        entityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        }
    },
    comment: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    commentsCount: {
        type: Number,
        default: 0,
    },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment