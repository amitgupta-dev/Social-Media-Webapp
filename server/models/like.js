const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    entity: {
        entityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: function () {
                return this.entityType === "post" ? "Post" : "Comment";
            },
        },
        entityType: {
            type: String,
            required: true,
            enum: ["post", "comment"]
        }
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