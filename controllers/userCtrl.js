const expressAsyncHandler=require("express-async-handler")
const User = require("../model/user");




module.exports.createUser=expressAsyncHandler(async(req,res)=>{
    const {email, firstname, lastname,password}=req.body;
    const userExists=await User.findOne({email});
    if(userExists) throw new Error("User already Exists")
    try{
     
        const user=await User.create({email,firstname,lastname,password});
        res.status(200).json(user);
       }
       catch(err){
         res.json(err);
       }
})

module.exports.getUser=expressAsyncHandler(async(req,res)=>{
  try{
   
      const user=await User.find({});
      res.status(200).json(user);
     }
     catch(err){
       res.json(err);
     }
})