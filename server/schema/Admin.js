// this is admin schema 
const mongoose = require("mongoose")

const adminRegistration = new mongoose.Schema({
    fullname:{
        type:String,
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
        default:"admin"
    }
})

const admin = mongoose.model("Admin",adminRegistration)

module.exports = admin