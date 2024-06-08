import { User } from "../../models/userModule.js";
import jwt from "jsonwebtoken";
import bcrpt from 'bcrypt'

export const login=async(req,res)=>{
    try{
        // res.send(req.body);
        console.log(req.body);
        const {email,password}=req.body
        const resdata=await User.findOne({email});
        // res.send(resdata);
        // console.log(resdata);
        if(resdata){
            const checkpassword=await bcrpt.compare(password,resdata.password) //decrept
            console.log(checkpassword);
            if(checkpassword){
                const token=jwt.sign({email:resdata.email,name:resdata.name,role:resdata.roll},"Sample2024")
                res.send({message:"successfully Logged in",token});
            }else{
                res.send({message:"invalid email or password"});
            }
            
        }
        else{
        res.send({message:"invalid email or password"});
        }
        
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}