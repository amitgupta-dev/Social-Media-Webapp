const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        enum: ["post", "comment"],
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now(),
        required: true,
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Notification = new mongoose.model("Notification", NotificationSchema)

module.exports = Notification