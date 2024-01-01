const mongoose = require('mongoose')

const PageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    cover: {
        type: String,
        default: ""
    },
    avatar: {
        type: String,
        default: ""
    },
    followersCount: [{
        type: Number,
        default: 0
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    postsCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Number
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    about: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
})

const Page = mongoose.model('Page', PageSchema)

module.exports = Page
