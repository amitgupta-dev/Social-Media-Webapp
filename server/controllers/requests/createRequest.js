const Request = require('../../models/request')

const createRequest = async (req, res) => {
    const { createdFor, receiver } = req.body

    try {
        const existingRequest = await Request.findOne({ createdBy: req.user.id, receiver: receiver })
        if (!existingRequest) {
            const newRequest = new Request({
                createdBy: req.user.id,
                createdFor,
                receiver,
                createdAt: Date.now()
            })
            const createdRequest = await newRequest.save()
            return res.json({
                success: true,
                message: "Request created successfully",
                createdRequest
            }).status(200)
        }
        return res.json({
            success: false,
            message: "already requested",
            existingRequest
        }).status(409)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { createRequest }