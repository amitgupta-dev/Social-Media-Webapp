const User = require('../../models/user')

const deleteUser = async (req, res) => {
    try {
        const deleteResponse = await User.deleteOne({ _id: req.user.id })
        res.cookie("token", "", { httpOnly: true, maxAge: 0 })
        return res.json({
            success: true,
            message: "User deleted successfully",
            deleteResponse
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { deleteUser }