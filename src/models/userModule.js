// import mongoose from "mongoose";
import db from "../db/db.js";
import { Schema as _Schema } from "mongoose";

const Schema = _Schema;

const usersSchema=new Schema({
    name:String,
    email:String,
    phonenumber:Number,
    roll:{type:String,default:"user"},
    password:String,
    otp:String,
    otp_status:{type:String,default:'not verified'}
},{timestamps:true})

const AdminShema = new Schema(
    {
        email: {
            type: String,
            Required: true,
            lowercase: true,
        },
        password: {
            type: String,
            Required: true
        },
        token: {
            type: String
        },
    },
    { timestamps: true }
)







const User=db.model('users',usersSchema);//schema model or table creation
const Admin=db.model('admin',AdminShema);//schema model or table creation
export {User, Admin}
// export {User,User1} //multible user export
