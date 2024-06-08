import express from "express";
import { getusers,saveuser } from "../controllers/usersControllers.js";
const userRouter=express.Router()
userRouter.get('/getusers',getusers)
userRouter.post('/saveuser',saveuser)

export default userRouter
