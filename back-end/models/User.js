const mongoose = require('mongoose') 
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required :true 
    },
    email : {
        type : String,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true
    }
});

module.exports  = mongoose.model('User' , userSchema); 
