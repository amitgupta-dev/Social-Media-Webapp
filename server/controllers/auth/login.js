const User = require('../../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        //if user exists
        const searchedUser = await User.findOne({ email })

        if (!searchedUser) {
            return res.json({
                success: false,
                message: "user not found"
            })
        }

        //if password is correct
        const isRightPassword = await bcryptjs.compare(password, searchedUser.password)

        if (!isRightPassword) {
            return res.json({
                success: false,
                message: "Invalid password"
            })
        }

        const tokenData = {
            id: searchedUser._id,
            name: searchedUser.name,
            email: searchedUser.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        searchedUser.password = undefined

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.json({
            success: true,
            message: "Signin successful",
            user: searchedUser
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

module.exports = { login }