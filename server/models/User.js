const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        required : true
    },
    allProperties : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Property'
        }
    ]
});


module.exports = mongoose.model('User',userModel);