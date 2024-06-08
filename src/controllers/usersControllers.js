import { User } from "../models/userModule.js";

export const getusers=async(req,res)=>{ // method 2 export methods
    try{
        // const {email}=req.query;
    const response=await User.find({}); //find all
    // const response=await User.findOne({}); find one
    // console.log(new User(req.body))
    // const response=await User.find({email:email}); //find particular common val
    res.send(response);
}
catch(err){
    console.log(err);
    res.send(err);
}
   
}

export const saveuser = async(req,res)=>{
    try{
    const response=await new User(req.body).save(); //single save
    // console.log(new User(req.body))
    res.send(response);
}
catch(err){
    console.log(err);
}
   
}
