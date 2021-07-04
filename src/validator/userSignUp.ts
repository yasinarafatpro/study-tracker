
const Joi = require('joi');
const createError=require('http-errors')

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6).required(),
});
const signUpValidator=async (req,res,next)=>{
    try{
        await schema.validateAsync(req.body);
        return next();
    }catch(err){
        //console.log('error found in data format!...request canceled');
        return next(createError.BadRequest(err.message));
    }
};       
export default signUpValidator; 