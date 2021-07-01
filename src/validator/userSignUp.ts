
const Joi = require('joi');
const createError=require('http-errors')

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(3).required(),
});
const signUpValidator=async(req,res,next)=>{
    try{
        await schema.validateAsync(req.body);
        console.log('successfull');
        console.log(req.body);
        res.send({
            data:{
                name:req.body.name,
                email:req.body.email
            }
        })
        return next();
         res.end();
    }catch(err){
        console.log('error found in data format!...request canceled');
        return next(createError.BadRequest(err.message));
    }
};       
export default signUpValidator; 