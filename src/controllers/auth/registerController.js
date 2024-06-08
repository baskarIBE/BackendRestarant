import { User } from "../../models/userModule.js";
import bcrpt from 'bcrypt'
import { mail } from "../../services/Email/mail.services.js";
import generateOTP from "../../services/generateotb/generateotbServices.js";


const checkEmail=async (req, res, next) => {  
    try{ 
        // console.log(req.body);
        const email = req.body.email;
        var otp=generateOTP();
        mail(otp,email);
        const finduser=await User.findOne({email});
        if(!finduser){
                        
                        const resdata=await new User({email,otp:otp}).save();
                        res.send({message:"successfully send otp"});
                }else{
                            res.send({message:"Failed to otp send"});
                        }
        

    //     res.send(otp);

    //    console.log(otp);
    //    console.log(data);
    //    res.send(otp);


        
    }
    catch(err){
        res.send(err)
    }
  }

  const otpverify=async (req, res, next) => {  
    console.log(req.body)
  try{
      var findata = await User.findOne({email:req.body.email,otp:req.body.otp});
      console.log(findata);

      var status = {status : 'OTP verified', email : req.body.email}
      findata != null ? res.send(status): res.send({status : 'OTP invalid'});
  }
  catch(err){
     
      res.send(err);
  }

  }


// export const register=async(req,res)=>{
//     try{
//         const {email,password}=req.body;
//         const finduser=await User.findOne({email});
//         if(!finduser){
//             const hashpassword=await bcrpt.hash(password,10);
//             const resdata=await new User({...req.body,password:hashpassword}).save();
//             res.send({message:"successfully Registered"});
//     }
//     else{
//         res.send({message:"This email allready Exit"});
//     }
        
//     }
//     catch(err){
//         console.log(err);
//         res.send(err);
//     }
// }

const register=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const finduser=await User.findOne({email});
        if(!finduser){
            const hashpassword=await bcrpt.hash(password,10);
            const resdata=await new User({...req.body,password:hashpassword}).save();
            res.send({message:"successfully Registered"});
    }
    else{
        res.send({message:"This email allready Exit"});
    }
        
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

export {checkEmail,register,otpverify}
