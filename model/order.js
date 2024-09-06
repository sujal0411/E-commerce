const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    Orderitem : {
        type : String,
        required : true
    },
    Shipping_address : {
        type : String,
        required : true
    },
    Payment_method : {
        type : String,
        required : true
    }, 
    Payment_result : {
        type : String,
        enum : ['Pending','Confirmed','Declined'],
        defualt : 'Pending'
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    } 

});

let ORDER = mongoose.model('Order',OrderSchema);
module.exports = ORDER;