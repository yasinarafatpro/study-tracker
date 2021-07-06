const Joi=require('joi');
const createError=require('http-errors');

const schema=Joi.object({
    studyTime:Joi.string().required(),
    time:Joi.number().required(),
    note:Joi.string().max(1230).allow('',null),
    subject:Joi.string().allow(null),
    topic:Joi.number(),
    target:Joi.number().allow(null)
});
export const logValidator=async(req,res,next)=>{
    try{
        await schema.validateAsync(req.body);
        return next();

    }catch(err){
        return next(new createError.BadRequest(err.message));
    };
};