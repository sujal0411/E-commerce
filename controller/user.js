let USER = require('../model/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Secure = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("please attach a token");            
        }
        var decoded = jwt.verify(token,'DEMO');
        req.userID = decoded.id;
        let check = await USER.findById(decoded.id)
        if (!check) {
            throw new Error("user not found");            
        }
        next()
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};

exports.SignUp = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)    
        let Create = await USER.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Your account has been created',
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};

exports.SignIn = async function (req, res, next) {
    try {
        let check = await USER.findOne({username : req.body.username})
        if (!check) {
            throw new Error('User not found');            
        }
        let passverify = await bcrypt.compare(req.body.password,check.password)
        if (!passverify) {
            throw new Error('Password not match');            
        }
        
        var token = jwt.sign({ id: check._id }, 'DEMO');        
        
        res.status(201).json({
            status : 'success',
            message : 'Your account has been opened successfully',
            data : check,
            token
        })        
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};

exports.Find = async function (req, res, next) {
    try {        
        let Find = await USER.find()
        res.status(201).json({
            status : 'success',
            message : 'Your account has been fatched',
            data : Find
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};

exports.Update = async function (req, res, next) {
    try {
        let Update = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : 'Your account has been updated',
            data : Update
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};

exports.Delete = async function (req, res, next) {
    try {        
        let Delete = await USER.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Your account has been deleted',
            data : Delete
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};