const Joi = require ('joi')

const addressSchema = Joi.array().items({
    address_1: Joi.string().allow(null),
    address_2: Joi.string().allow(null),
    city: Joi.string().allow(null),
    createdAt: Joi.string(),
    customers: Joi.array().items(Joi.string().allow(null)),
    id: Joi.string().allow(null),
    state: Joi.string().allow(null),
    updatedAt: Joi.string(),
    zip: Joi.number().allow(null)
})
export default addressSchema;