const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  const { title } = req.body;
  const response = await categoryService.createCategory(title);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'created!', response });
});
const deleteCategory = catchAsync(async (req, res) => {
  const { _id } = req.body;
  const response = await categoryService.deleteCategory(_id);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'deleted!', response });
});
const getCategory = catchAsync(async (req, res) => {
  const response = await categoryService.getCategory();
  res.status(httpStatus.CREATED).send({ success: true, msg: 'fetched!', response });
});

module.exports = {
  createCategory,
  deleteCategory,
  getCategory,
};
