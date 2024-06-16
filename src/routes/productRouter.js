import express from 'express';
import { delprodet, getallprodu, proupdata, saveproduct } from '../controllers/productControllers.js';



const productRouter=express.Router();
productRouter.post('/addproduct',saveproduct);
productRouter.get('/getproduct',getallprodu)
productRouter.post('/updpro',proupdata)
productRouter.delete('/delpro/:id',delprodet)

export default productRouter;