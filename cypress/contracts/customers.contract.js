const Joi = require('joi')

const customersSchema = Joi.object({
  address: Joi.array().items({
    address_1: Joi.string(),
    address_2: Joi.string(),
    city: Joi.string(),
    createdAt: Joi.string(),
    customers: Joi.array().items(Joi.string()),
    id: Joi.string(),
    state: Joi.string(),
    updatedAt: Joi.string(),
    zip: Joi.number()
  }),
  createdAt: Joi.string(),
  email: Joi.string(),
  firstName: Joi.string(),
  id: Joi.string(),
  lastName: Joi.string(),
  orders: Joi.array().items({
    createdAt: Joi.string(),
    customer: Joi.string(),
    discount: Joi.number(),
    id: Joi.string(),
    product: Joi.array().items({
      createdAt: Joi.string(),
      description: Joi.string(),
      id: Joi.string(),
      itemPrice: Joi.number(),
      name: Joi.string(),
      orders: Joi.array().items(Joi.string()),
      updatedAt: Joi.string()
    }),
    quantity: Joi.number(),
    totalPrice: Joi.number(),
    updatedAt: Joi.string()
  }),
  phone: Joi.string(),
  updatedAt: Joi.string()


})
export default customersSchema;