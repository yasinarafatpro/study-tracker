const Joi=require('joi');
const createError=require('http-errors')

const schema=Joi.object({
    name:Joi.string().required(),
    discription:Joi.string().min(10).required()
});

const subjectValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
        return next();
    }
    catch (err) { 
        return next(createError.BadRequest(err.message));
    };
};
export default subjectValidator;