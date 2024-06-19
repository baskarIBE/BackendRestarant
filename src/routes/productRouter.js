import express from 'express';
import { delprodet, getallprodu, mandelepro, proupdata, saveproduct } from '../controllers/productControllers.js';



const productRouter=express.Router();
productRouter.post('/addproduct',saveproduct);
productRouter.get('/getproduct',getallprodu)
productRouter.post('/updpro',proupdata)
productRouter.delete('/delpro/:id',delprodet)
productRouter.post('/delmanydat',mandelepro)

export default productRouter;