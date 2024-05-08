// this is login and register page for admin and user
const Movie = require("./MoviresSchema")
const Admin = require("/Admin.js")
const User = require("/User.js")
const bcrypt = require("bcrypt")

// for admin

// login admin
const loginAdmin =async (req,res)=>{
    try {
        const {email,password} = req.body;
        const login = await Admin.find({email})
        if(!login){
            return res.status(404).json({sucess:false,message:"Unable to login"})
        }
        if(login){
            const checkPassword = bcrypt.compareSync(password,login.password)
            if(checkPassword){
                token = jwt.sign({id:login._id},process.env.SECRET_KEY,{expiresIn:"2h"})
            }
        }
    } catch (error) {
        return res.status(400).json({scuess:false,message:"error",error})
    }
}


// register admin
const registerAdmin = async(req,res)=>{
    try {
        const{fullname,email,password} = req.body;
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const createAdmin = await admin.create({
            fullname:fullname,
            email:email,
            password:hashedPassword
        })
        if(!createAdmin){
            return res.status(404).json({scuess:false,message:"Not created"})
        }else{
            return res.status(200).json({sucess:true,message:"Admin Registered sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({scuess:false,message:"err",error})
    }
}





// for user

// register user
const registerUser = async(req,res)=>{
    try {
        const{fullname,contact,email,password} = req.body;
        const createUser = await admin.create({
            UserFullName:fullname,
            contact:contact,
            email:email,
            password:password
        })
        if(!createUser){
            return res.status(404).json({scuess:false,message:"Not created"})
        }else{
            return res.status(200).json({sucess:true,message:"User Registered sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({scuess:false,message:"err",error})
    }
}


module.exports = {admin, registerAdmin}