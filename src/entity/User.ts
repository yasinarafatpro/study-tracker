const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().required(),
    email:Joi.string(),
    password:Joi.string()

});
export default schema;