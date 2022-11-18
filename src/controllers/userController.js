const User = require("../models/user")
const {sign, verify} = require('../utils/jwt')
const { StatusCodes } = require('http-status-codes')

exports.creatUser = async(req, res)=>{
    try {
        const user = new User({...req.body}) 
        user.save((err, data)=>{
            if(!err){
                res.status(StatusCodes.CREATED).json({data})
            }
        })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.login = async(req, res)=>{
    try {
        const { email, password } = req.body
    if (!email) {
        res.status(StatusCodes.NOT_FOUND).send({
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        })
    }
    else if (!password) {
        res.status(StatusCodes.NOT_FOUND).send({
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        })
    }
    const user = await User.findOne({ email: email, password: password })
    if (!user) {
        res.status(StatusCodes.NOT_FOUND).send({
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        })
    }else{
        res.status(StatusCodes.OK).json({user})
    }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




exports.getById = async(req, res)=>{
    try {
        const result = await User.findById({_id: req.params.id})
        res.status(StatusCodes.OK).json({result})
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND)
    }
}


exports.getUsers = async(req, res)=>{
    try {
        const result = await User.find({}).sort()
        res.status(StatusCodes.OK).json({total: result.length, result})
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND)
    }
}


exports.EditUser = async(req, res)=>{
    try {
        const result = await User.findByIdAndUpdate(req.params.id, {
            ...req.body, photo: req.file.filename
        })
        result.save((err, data)=>{
            if(!err){
                res.status(StatusCodes.OK).json({data})
            }
        })
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST)
    }
}



exports.deleteUser = async(req, res)=>{
    try {
        const result = await User.findByIdAndDelete({_id: req.params.id})
        res.status(StatusCodes.OK).json({result})
    } catch (err) {
        res.status(StatusCodes.NOT_FOUND)
    }
}