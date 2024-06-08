import express from "express";
import userRouter from "./userRoutes.js";
// import productRouter from "./productRouter.js";
import authRouter from "./authRoute.js";

const router=express.Router()
router.use('/users',userRouter)
// router.use('/products',productRouter)
router.use('/auth',authRouter)

export default router;


