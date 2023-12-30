const Request = require('../../models/request')

const getRequests = async (req, res) => {
    try {
        const { createdFor, createdBy, receiver, status, pageSize, pageNo } = req.query

        const filter = {}

        if (createdFor) {
            const purposes = createdFor.split(',')
            filter.createdFor = { $in: purposes }
        }
        if (createdBy) {
            const createrList = createdBy.split(',')
            filter.createdBy = { $in: createrList }
        }
        if (receiver) {
            const receiverList = receiver.split(',')
            filter.createdBy = { $in: receiverList }
        }
        if (status) {
            const statuses = status.split(',')
            filter.status = { $in: statuses }
        }
        console.log(filter)

        const limitValue = Number(pageSize) || 30
        const pageNumber = Number(pageNo || "0")
        const skipValue = pageNumber === 0 ? 0 : limitValue * (pageNumber - 1)

        const requests = await Request.find(filter)
            .populate([
                { path: 'createdBy', select: 'name avatar' },
                { path: 'receiver', select: 'name avatar' }
            ])
            .limit(limitValue)
            .skip(skipValue)
        return res.json({
            success: true,
            message: "requests fetched successfully",
            requests
        }).status(200)
    }
    catch (error) {
        return res.json({
            success: false,
            message: "something went wrong"
        }).status(500)
    }
}

module.exports = { getRequests }