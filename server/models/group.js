const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    cover: {
        type: String,
        default: ""
    },
    avatar: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true,
    },
    hashtags: [String],
    description: {
        type: String
    },
    type: {
        type: String,
        required: true,
        enum: ["public", "private"]
    },
    joinType: {
        type: String,
        enum: ['open', 'request', 'closed'],
        default: 'open'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    }],
    membersCount: {
        type: Number,
        required: true,
        default: 0
    },
    postsCount: {
        type: Number,
        required: true,
        default: 0
    },
    requestsCount: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: String
    },
})
const Group = mongoose.model("Group", GroupSchema)
module.exports = Group