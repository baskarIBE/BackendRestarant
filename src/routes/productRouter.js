import express from 'express';
import { getallprodu, saveproduct } from '../controllers/productControllers.js';



const productRouter=express.Router();
productRouter.post('/addproduct',saveproduct);
productRouter.get('/getproduct',getallprodu)

export default productRouter;