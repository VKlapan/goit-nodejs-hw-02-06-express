const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .length(10)
    .required(),
  favorite: Joi.bool(),
});

module.exports = schema;
