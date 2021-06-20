import console from "console";

const express=require('express');
const app=express();
app.use(express.json());
const userSignSchema=require('./entity/User')

app.get('/api/v1',(req,res)=>{
    res.send({
        data:{
            messege:'hello world'
        }
    });
    res.end();
});
app.post('/api/v1/user', async(req,res,next)=>{
    try {
        await userSignSchema.validateAsync(req.body);
    }
    catch (err) { 
        console.log('error found in data format!...request canceled!!!')
        res.end();
    }
    return next();
},(req,res,next)=>{
    console.log('request accepted');
    console.log(req.body);
    res.end();
});
app.use((err,req,res,next)=>{
    
});
export default app;