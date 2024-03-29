const User = require('../../models/user')

const getUser = async (req, res) => {
    try {
        let { id } = req.params

        // check if user exists
        const searchedUser = await User.findById({ _id: id })

        if (!searchedUser) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        searchedUser.password = undefined

        return res.status(201).json({
            success: true,
            message: "User fetched successfully",
            user: searchedUser
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

module.exports = { getUser }