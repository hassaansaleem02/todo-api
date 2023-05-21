const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { taskService } = require('../services');

const createTask = catchAsync(async (req, res) => {
  const { title, category_id } = req.body;
  const response = await taskService.createTask(title, category_id);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'created!', response });
});
const updateTask = catchAsync(async (req, res) => {
  const { _id, status } = req.body;
  const response = await taskService.updateTask(_id, status);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'upadted!', response });
});
const deleteTask = catchAsync(async (req, res) => {
  const { task_id } = req.params;
  const response = await taskService.deleteTask(task_id);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'upadted!', response });
});
const getTask = catchAsync(async (req, res) => {
  const { category_id } = req.params;
  const response = await taskService.getTask(category_id);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'fetched!', response });
});

const createSubTask = catchAsync(async (req, res) => {
  const { title, task_id } = req.body;
  const response = await taskService.createSubTask(title, task_id);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'Sub Task created!', response });
});
const updateSubTask = catchAsync(async (req, res) => {
  const { task_id, subtask_id, status } = req.body;
  const response = await taskService.updateSubTask(task_id, subtask_id, status);
  res.status(httpStatus.CREATED).send({ success: true, msg: 'Sub Task upadted!', response });
});

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  createSubTask,
  updateSubTask,
  getTask,
};
