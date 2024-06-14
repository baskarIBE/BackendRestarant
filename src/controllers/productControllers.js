import { Product } from "../models/productModule.js";

export const saveproduct = async(req,res)=>{
    
    try{
        console.log(req.body);
    const response=await new Product(req.body).save(); //single save
    // console.log(new User(req.body))
    res.send(response);
}
catch(err){
    console.log(err);
}
   
}
export const getallprodu = async(req,res)=>{
    
    try{

        const response=await Product.find({});//findall
    // console.log(new User(req.body))
    console.log(response);
    res.send(response);
}
catch(err){
    console.log(err);
}
   
}
