// this is login and register page for admin and user
const Admin = require("../schema/Admin")
const User = require("../schema/User")
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
                return res.status(200).json({sucess:true,message:"logged in sucessfully",token, userId:login._id})
            }else{  
                return res.status(404).json({sucess:false,messag:"Password if incorrect"})
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
        const{fullName,contact,email,password} = req.body;
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const createUser = await User.create({
            UserFullname:fullName,
            contact:contact,
            email:email,
            password:hashedPassword
        })
        if(!createUser){
            return res.status(404).json({success:false,message:"Not created"})
        }else{
            return res.status(200).json({success:true,message:"User Registered sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"err",error})
    }
}

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "Unable to login" });
      }
  
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        // const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "2h" });
        return res.status(200).json({ success: true, message: "Logged in successfully" }); // token, userId: user._id
      } else {
        return res.status(401).json({ success: false, message: "Password is incorrect" });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: "Error", error });
    }
  };

  //get user data for admin
  const getUserData = async(req,res)=>{
    try {
        const userData = await User.find({})
        if(!userData){
            return res.status(404).json({success:false,message:"Unable to get user data"})
        }else{
            return res.status(200).json({success:true,userData})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
  }

const deleteUser = async(req,res)=>{
    try {
        const userId = req.params.id;
        console.log(userId)
        console.log("delete")
        const deleteU = await User.findByIdAndDelete(userId)
        if(!deleteU){
            return res.status(404).json({success:false,message:"Unable to find and delete user"})
        }else{
            return res.status(200).json({success:true,message:"deleted successfully"})
        }
    } catch (error) {
        res.status(400).json({success:false,message:"error",error})
    }
}
  
module.exports = {
    registerAdmin, 
    registerUser,
    loginAdmin,
    loginUser,
    getUserData,
    deleteUser
}