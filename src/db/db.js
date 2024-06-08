import mongoose from "mongoose";

const db=mongoose.createConnection("mongodb://localhost:27017/restaurant");
// mongodb://localhost:27017/

db.once('open',()=>console.log("DB successfuly Connected"));
db.on('error',(err)=>console.log(`Db not connected:${err.message}`));
export default db;