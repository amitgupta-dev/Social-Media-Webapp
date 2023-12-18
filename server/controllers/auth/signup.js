const User = require('../../models/user')
const bcryptjs = require('bcryptjs')

const signup = async (req, res) => {
    try {
        let { name, email, password, dob, gender, acceptTAndC } = req.body

        dob = new Date(dob).getTime()

        // check if user exists
        const user = await User.findOne({ email })

        if (user) {
            return res.json({
                success: false,
                message: "user already exists"
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            avatar: `${gender === "Male" ? "https://res.cloudinary.com/dfokdktd4/image/upload/v1702699967/Avatars%20And%20Covers/static%20images/hqyzp0l2jkcqmocghmg1.jpg" : "https://res.cloudinary.com/dfokdktd4/image/upload/v1702699949/Avatars%20And%20Covers/static%20images/snvyy3xw3gosv03empjx.jpg"}`,
            cover: "https://res.cloudinary.com/dfokdktd4/image/upload/v1702701463/Avatars%20And%20Covers/static%20images/ge1hjhe8ywsvcsmnb7h7.png",
            name,
            email,
            password: hashedPassword,
            dob,
            gender,
            acceptTAndC,
            isAdmin: true,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        let createdUser = await newUser.save()

        createdUser.password = undefined

        console.log(createdUser)

        return res.json({
            success: true,
            message: "User created successfully",
            user: createdUser
        })
    }
    catch (err) {
        console.log(err)
        return res.json({
            success: false,
            message: err.message || "something went wrong"
        })
    }
}

module.exports = { signup }