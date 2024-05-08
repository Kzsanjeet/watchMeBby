// this is the schema for the User model
// this is admin schema 
const mongoose = require("mongoose")

const adminRegistration = new mongoose.Schema({
    UserFullname:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    }
})

const User = mongoose.model("user",adminRegistration)

module.exports = User