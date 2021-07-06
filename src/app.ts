import login from "./controller/logInController";
import signUp from "./controller/signUpController";
import loginValidator from "./validator/userLoginValidator";
import signUpValidator from "./validator/userSignUp";
import {isAuthorized} from './controller/helper/jwt'
import subjectValidator from './validator/subjectValidator'
import addSubject from "./controller/subjectController";
import errorHandler from "./controller/helper/errorHandler";
import {topicValidator} from "./validator/topicValidator";
import { addTopic } from "./controller/topicController";
import { targetValidator } from "./validator/userTargetValidator";
import { addTarget } from "./controller/targetController";

const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('hello world');
    res.end();
});

app.post('/api/v1/user',signUpValidator,signUp);
app.post('/api/v1/user/login',loginValidator,login);
app.post('/api/v1/subject',isAuthorized,subjectValidator,addSubject)
app.post('/api/v1/topic',isAuthorized,topicValidator,addTopic);
app.post('/api/v1/target',isAuthorized,targetValidator,addTarget);
   
app.use(errorHandler);

export default app;