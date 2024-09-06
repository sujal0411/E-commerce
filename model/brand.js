const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    Brandname : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Manufacturing : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }

});

let BRAND = mongoose.model('Brand',brandSchema);
module.exports = BRAND;