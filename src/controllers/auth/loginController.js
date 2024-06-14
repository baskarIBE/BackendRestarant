import { Admin, User } from "../../models/userModule.js";
import jwt from "jsonwebtoken";
import bcrpt from 'bcrypt'


const generateToken = async (user) => {
    try {
        const data = { _id: user.id }
       // const token = jwt.sign(data, process.env.JWT_SECRET)
        const token = jwt.sign({data:{_id : user.id}}, "AdminSecret");

        console.log(token)
        return Promise.resolve({ token })
    } catch (error) {
        return Promise.reject(error)
    }
}

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

export const adminlogin=async(req,res)=>{
    try {
        // console.log(req.body)
        // res.send(req.body);
         const user = await Admin.find({ email: req.body.email })
        // res.send(user);
        //  console.log(user[0].password)
         if (!user) return res.status(400).json({ message: "Mail miss match" })
         const { password } = req.body
         const checkPassword = password === user[0].password
         if (!checkPassword) return res.status(400).json({ message: 'Password miss match' })
         const { token } = await generateToken(user)
        console.log(user);

         if (user) {
            const email = user[0].email;
            const id = user[0]._id;
             res.status(200).json({
                 user: {
                        id:id,
                     email: email
                 },
                 token,
                 message: 'Login Success'
             })
         }
     } catch (err) {
         console.log(err)
     }
}

