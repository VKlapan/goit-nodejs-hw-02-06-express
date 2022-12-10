const Joi = require("joi");

const schemaContact = Joi.object({
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

const schemaFavoriteContact = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = { schemaContact, schemaFavoriteContact };
