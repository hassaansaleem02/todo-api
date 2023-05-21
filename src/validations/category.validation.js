const Joi = require('joi');

const create_category = {
  body: Joi.object().keys({
    title: Joi.string().required(),
  }),
};
const delete_category = {
  body: Joi.object().keys({
    _id: Joi.string().required(),
  }),
};

module.exports = {
  create_category,
  delete_category
};
