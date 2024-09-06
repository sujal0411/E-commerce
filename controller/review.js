let REVIEW = require('../model/review');

exports.Create = async function (req, res, next) {
    try {   
        req.body.userID = req.userID     
        let Create = await REVIEW.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Your review has been sumbited',
            data : Create
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
        let Find = await REVIEW.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status : 'success',
            message : 'Your review has been fatched',
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
        let Update = await REVIEW.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : 'Your review has been updated',
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
        let Delete = await REVIEW.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Your review has been deleted',
            data : Delete
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};