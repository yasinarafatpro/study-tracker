
const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
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
                name:req.body.username,
                email:req.body.email
            }
        })
        res.end();
        //return next();
    }catch(err){
        console.log('error found in data format!...request canceled');
        return next(err);
    }
};       
export default signUpValidator; 