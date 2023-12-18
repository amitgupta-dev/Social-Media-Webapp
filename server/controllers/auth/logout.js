const logout = (res) => {
    try {
        res.cookie("token", "", { httpOnly: true, maxAge: 0 })
        return res.json({
            success: true,
            message: "logout successful"
        })
    }

    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message || "something went wrong"
        })
    }
}

module.exports = { logout }