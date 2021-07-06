const Joi=require('joi');
const createError=require('http-errors')

const schema=Joi.object({
    startDate:Joi.date().required(),
    endDate:Joi.date().required(),
    time:Joi.number().min(10).allow(null),
    note:Joi.string().allow(null)
});

export const targetValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
        return next();
    }
    catch (err) { 
        return next(createError.BadRequest(err.message));
    };
};