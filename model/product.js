const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Productname : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    },
    Quantity : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Image : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }


});

let PRODUCT = mongoose.model('Product',productSchema);
module.exports = PRODUCT;