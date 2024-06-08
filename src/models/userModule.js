import mongoose from "mongoose";
import db from "../db/db.js";


const usersSchema=mongoose.Schema({
    name:String,
    email:String,
    phonenumber:Number,
    roll:{type:String,default:"user"},
    password:String,
    otp:String,
    verified:{type:Boolean,default:false}
},{timestamps:true})
const User=db.model('users',usersSchema);//schema model or table creation
export {User}
// export {User,User1} //multible user export