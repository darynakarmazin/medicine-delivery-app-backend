const Joi = require("joi");

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.required(),
  address: Joi.required(),
  medicines: Joi.required(),
  amount: Joi.required(),
});

module.exports = orderSchema;
