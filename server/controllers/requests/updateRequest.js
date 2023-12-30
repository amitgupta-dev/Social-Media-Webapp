const Request = require('../../models/request')

const updateRequest = async (req, res) => {
    const { status } = req.body

    try {
        let searchedRequest = await Request.findById({ _id: req.params.id })

        if (searchedRequest.receiver != req.user.id) {
            return res.json({
                success: false,
                message: "Unauthorized",
            }).status(403)
        }

        if (status && (status === "accepted" || status === "rejected")) { searchedRequest.status = status }

        const updatedRequest = await searchedRequest.save()

        return res.json({
            success: true,
            message: "Request updated successfully",
            updatedRequest
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message || "something went wrong"
        }).status(500)
    }
}

module.exports = { updateRequest }