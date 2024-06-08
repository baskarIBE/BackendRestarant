import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.js';
const app=express();
// app.use(cors({
//     origin:["http://localhost:5173/"]
// }));
app.use(cors());

app.use(express.json())
app.use(morgan('tiny'))
app.use(router);

app.get('/',(req,res)=>{
    console.log("hello server")
    res.send("hello world2")
    // res.send({Message:"hello server"}) //json object module
    // res.send([{Message:"hello server"}]) //json array object module
})

app.post('/',(req,res)=>{
    // console.log("hello server")
    // res.send("hello world2")
    // res.send({Message:"hello server"}) //json object module
    // res.send([{Message:"hello server"}]) //json array object module
})

export default app;