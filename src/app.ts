//import signUp from "../controller/signUpController";
import signUpValidator from "./validator/userSignUp";

const express=require('express');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
    res.end();
});

app.post('/api/v1/user',signUpValidator);
   
app.use((err,req,res,next)=>{
    console.log(err);
    res.send({
        error:{
            status:401,
            name:err.name,
            message:err.message
        },

    });
});
export default app;