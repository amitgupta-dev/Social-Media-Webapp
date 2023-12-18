const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    entity: {
        type: String,
        required: true,
        enum: ["post", "comment"],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Number,
        default: Date.now(),
        required: true,
    },
    
})

const Like = new mongoose.model("Like", LikeSchema)

module.exports = Like