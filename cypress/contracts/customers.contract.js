const Joi = require('joi')

const customersSchema = Joi.array().items({
  address: Joi.object().keys({
    id: Joi.string()
    }).allow(null),
  createdAt: Joi.string(),
  email: Joi.string().allow(null),
  firstName: Joi.string().allow(null),
  id: Joi.string(),
  lastName: Joi.string().allow(null),
  phone: Joi.string().allow(null),
  updatedAt: Joi.string()
})
export default customersSchema;