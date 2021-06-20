const express=require('express');
const app=express();
app.use(express.json());
import schema from "./entity/User";

app.get('/api/v1',(req,res)=>{
    res.send({
        data:{
            messege:'hello world'
        }
    });
    res.end();
});

app.post('/api/v1/user',async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
    }
    catch (err) { 
        console.log("erro in data format");
        return next(err);
    }
   return next();
},(req,res,next)=>{
    console.log('request accepted');
    console.log(req.body);
    res.send({
        data:{
            message:'request accepted',
            username:req.body.username,
            email:req.body.email,
        },
    });
    res.end();

});

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