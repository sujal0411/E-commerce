let CATEGORY = require('../model/category');

exports.Create = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let create = await CATEGORY.create(req.body);
        res.status(201).json({
            status : 'success',
            message : 'Your category has been created',
            create
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
        let Find = await CATEGORY.find({userID : req.userID}).populate('userID')
        res.status(201).json({
            status : 'success',
            message : 'Your category has been fatched',
            Find
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
        let Update = await CATEGORY.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.status(201).json({
            status : 'success',
            message : 'Your category has been updated',
            Update
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
        let Delete = await CATEGORY.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : 'success',
            message : 'Your category has been deleted',
            Delete
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};