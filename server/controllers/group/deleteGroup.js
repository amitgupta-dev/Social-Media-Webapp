const Group = require('../../models/group')

const deleteGroup = async (req, res) => {
    try {
        const deleteResponse = await Group.deleteOne({ _id: req.params.id, owner: req.user.id })

        if (deleteResponse.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Group not found"
            })
        }

        return res.json({
            success: true,
            message: "Group deleted successfully",
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

module.exports = { deleteGroup }