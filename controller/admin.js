let ADMIN = require('../model/admin');
const bcrypt = require('bcrypt');

exports.SingUp = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let Create = await ADMIN.create(req.body)
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

exports.SingIn = async function (req, res, next) {
    try {
        let check = await ADMIN.findOne({username : req.body.username})
        if (!check) {
            throw new Error('User not found');            
        }
        let passverify = await bcrypt.compare(req.body.password,check.password)
        if (!passverify) {
            throw new Error('Password not match');            
        }
        res.status(201).json({
            status : 'success',
            message : 'Your account has been opened successfully',
            data : check
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
        let Find = await ADMIN.find()
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
        let Update = await ADMIN.findByIdAndUpdate(req.params.id,req.body,{new:true})
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
        let Delete = await ADMIN.findByIdAndDelete(req.params.id)
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