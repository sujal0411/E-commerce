let ORDER = require('../model/order');

exports.Create = async function (req, res, next) {
    try {      
        req.body.userID = req.userID  
        let Create = await ORDER.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Your order has been sumbited',
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
        let Find = await ORDER.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status : 'success',
            message : 'Your order has been fatched',
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
        let Update = await ORDER.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status : 'success',
            message : 'Your order has been updated',
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
        let Delete = await ORDER.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Your order has been Deleted',
            data : Delete
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message            
        })        
    }
};