import express from 'express';
import { checkEmail,register,otpverify } from '../controllers/auth/registerController.js';
import { login } from '../controllers/auth/loginController.js';


const authRouter=express.Router();
authRouter.post('/apiregister',register);
authRouter.post('/send-otp',checkEmail);
authRouter.post('/apilogin',login);
authRouter.post('/get-otp',otpverify);

export default authRouter;



