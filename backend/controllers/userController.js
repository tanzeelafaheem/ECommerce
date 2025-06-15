import validator from 'validator';
import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET);
}

//route for user login
const loginUser=async(req,res)=>{
try {
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(400).json({success:false,message:"User does not exist"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(isMatch){
        const token=createToken(user._id);
        return res.status(200).json({success:true,token});
    }
    else{
        return res.status(400).json({success:false,message:"Invalid credentials"});
    }
    
} catch (error) {
    res.status(500).json({success:false,message:error.message});
}
}

//route for user registration
const registerUser=async(req,res)=>{
try {
    const {name,email,password}=req.body;
    if (!name || !email || !password) {
  return res.status(400).json({ success: false, message: "All fields are required" });
     }
    
    //check if user already exists
    const exists=await userModel.findOne({email});
    if(exists){
        return res.status(400).json({success:false,message:"User already exists"});
    }
    //validating email format and strong password
    if(!validator.isEmail(email)){
        return res.status(400).json({success:false,message:"Please enter a valid email"});
    }
    if(password.length<8){
        return res.status(400).json({success:false,message:"Please enter a strong password with at least 8 characters"});
    }
   //hashing the password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    //create user
    const newUser=new userModel({
        name,
        email,
        password:hashedPassword
    });
    const user=await newUser.save();
    const token=createToken(user._id);
    //send response
    return res.status(201).json({success:true,token});
    
} catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message});
}
}

//route for admin login
const adminLogin=async(req,res)=>{
try{
    const {email,password}=req.body;
    if(email == process.env.ADMIN_EMAIL || password == process.env.ADMIN_PASSWORD){
        const token=jwt.sign(email+password,process.env.JWT_SECRET);
        res.json({success:true,token});
    }
    else{
        res.status(400).json({success:false,message:"Invalid credentials"});
    }
}
catch(error){
    console.log(error);
    res.status(500).json({success:false,message:error.message});    
}
}

export {loginUser,registerUser,adminLogin}