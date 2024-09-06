const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },

});

let ADMIN = mongoose.model('Admin',AdminSchema);
module.exports = ADMIN;