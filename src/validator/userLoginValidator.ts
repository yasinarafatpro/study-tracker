const Joi=require('joi');
const createError=require('http-errors')

const schema=Joi.object({
    email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:Joi.string().min(3).required(),
});

const loginValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
        return next();
    }
    catch (err) { 
        return next(createError.BadRequest(err.message));
    };
};
export default loginValidator;