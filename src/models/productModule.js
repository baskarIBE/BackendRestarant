import db from "../db/db.js";
import { Schema as _Schema } from "mongoose";

const Schema = _Schema;

const productSchema=new Schema({
    id:String,
    productimages:String,
    name:String,
    image:String,
    price:Number,
    category:String,
    rating:Number,
    inventoryStatus:String,
    quantity:Number
},{timestamps:true})


const Product=db.model('Products',productSchema);//schema model or table creation
export {Product}