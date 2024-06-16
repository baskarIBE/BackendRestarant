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
    // console.log(response);
    res.send(response);
}
catch(err){
    console.log(err);
}
   
}

export const proupdata=async (req, res, next) => {  
   
  try{
      var findata = await Product.findOne({id:req.body.id});
      var updatedata = await Product.updateOne({'id': req.body.id},{...req.body.updata});

      var status = {status : 'updated', id : req.body.id}
      findata != null ? res.send(status): res.send({status : 'Updation Failed'});
    
  }
  catch(err){
     
      res.send(err);
  }

  }

  export const delprodet=async (req, res) => {  
    const deid=req.params.id;
    console.log(deid);
    try{
        
        var findata = await Product.deleteOne({_id:deid});

        var status = {status : 'Deleted', id : req.body.id}
        findata != null ? res.send(status): res.send({status : 'product not Deleted'});
      
    }
    catch(err){
       
        res.send(err);
    }
  
    }
