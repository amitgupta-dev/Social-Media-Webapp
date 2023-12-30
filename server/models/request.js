const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdFor: {
        type: String,
        enum: ["joinGroup", "groupPost", "friendship"],
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: function () {
            if (this.createdFor === "friendship") return "User"
            if (this.createdFor === "joinGroup" || this.createdFor === "groupPost") return "Group"
        },
    },
    status: {
        type: String,
        default: "pending",
        enum: ["accepted", "pejected", "pending"]
    },
    createdAt: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Number
    }
})

const Request = mongoose.model('Request', RequestSchema)

module.exports = Request