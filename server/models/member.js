const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["member", "admin", "owner"]
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    postsCount: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Number
    }
})
const Member = mongoose.model("Member", MemberSchema)
module.exports = Member