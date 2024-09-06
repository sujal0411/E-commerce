const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Categoryname : {
        type : String,
        required : true
    },
    Categorytype : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }


});

let CATEGORY = mongoose.model('Category',CategorySchema);
module.exports = CATEGORY;