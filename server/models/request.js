const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdFor: {
        type: String,
        enum: ["JoinGroup", "AddGroupPost", "AddFriend"],
        required: true
    },
    sentTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    receivedFrom: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    status: [{
        type: String,
        enum: ["Accepted", "Rejected", "Pending"]
    }],

})

const Request = mongoose.model('Request', RequestSchema)

export default Request