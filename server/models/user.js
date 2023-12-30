const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    cover: String,
    avatar: String,
    name: {
        type: String,
        required: true
    },
    about: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number,
    dob: Number,
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"]
    },
    password: {
        type: String,
        required: true,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdAt: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Number,
        required: true
    },
    work: [
        {
            position: String,
            organization: String,
            from: Number,
            to: Number,
        }
    ],
    education: [
        {
            course: String,
            organization: String,
            from: Number,
            to: Number,
        }
    ],
    placesLived: [
        {
            location: String,
            from: Number,
            to: Number
        }
    ],
    relationship: String,
    familyType: String,
    nickname: String,
    quote: String,
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request"
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    acceptTAndC: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Number,
    verifyToken: String,
    verifyTokenExpiry: Number,
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

module.exports = User