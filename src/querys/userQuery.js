const User = require("../models/user")
const { StatusCodes } = require('http-status-codes')

exports.getQuery = async (req, res) => {
    try {
        let condition = {};
        const {
            name,
            email
        } = req.query
        if (name) condition = { ...condition, name }
        if (email) condition = { ...condition, email }
        const data = await Mowina.find(condition)
        return res.status(StatusCodes.OK).json({
            data
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            error: 'Internal Server Error'
        })
    }
}