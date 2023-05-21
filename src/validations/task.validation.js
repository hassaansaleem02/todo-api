const Joi = require('joi');

const create_task = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    category_id: Joi.string().required(),
  }),
};
const create_sub_task = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    task_id: Joi.string().required(),
  }),
};
const update_task = {
  body: Joi.object().keys({
    _id: Joi.string().required(),
    status: Joi.boolean().required(),
  }),
};
const update_sub_task = {
  body: Joi.object().keys({
    task_id: Joi.string().required(),
    subtask_id: Joi.string().required(),
    status: Joi.boolean().required(),
  }),
};

module.exports = {
  create_task,
  create_sub_task,
  update_sub_task,
  update_task,
};
