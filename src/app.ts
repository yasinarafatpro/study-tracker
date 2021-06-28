import login from "./controller/logInController";
import signUp from "./controller/signUpController";
import loginValidator from "./validator/userLoginValidator";
import signUpValidator from "./validator/userSignUp";
import {isAuthorized} from './controller/helper/jwt'
import subjectValidator from './validator/subjectValidator'
import addSubject from "./controller/subjectController";

const express=require('express');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
    res.end();
});

app.post('/api/v1/user',signUpValidator,signUp);
app.post('/api/v1/user/login',loginValidator,login);
app.post('/api/v1/subject',subjectValidator,isAuthorized,addSubject)
   
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