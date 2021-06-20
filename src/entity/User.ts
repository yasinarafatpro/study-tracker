const Joi=require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email:Joi.string().required(),
    password:Joi.string().required()
});
export default schema;