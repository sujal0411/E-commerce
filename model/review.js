const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    Productname : {
        type : String,
        required : true
    },
    Rating : {
        type : String,
        required : true
    },
    Comment : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }    

});

let REVIEW = mongoose.model('Review',ReviewSchema);
module.exports = REVIEW;