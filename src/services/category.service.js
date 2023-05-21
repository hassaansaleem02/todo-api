const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Category, Task } = require('../models');

const createCategory = async (title) => {
  if (await Category.findOne({ title })) {
    throw new ApiError(409, 'A Category with this name already exist');
  }
  return await Category.create({ title });
};
const deleteCategory = async (_id) => {
  await Task.deleteMany({ category_id: _id });
  return await Category.deleteOne({ _id });
};
const getCategory = async () => {
  return await Category.find({});
};

module.exports = {
  createCategory,
  deleteCategory,
  getCategory,
};
