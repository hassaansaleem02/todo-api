const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Task } = require('../models');

const createTask = async (title, category_id) => {
  return await Task.create({ title, category_id });
};
const createSubTask = async (title, task_id) => {
  return await Task.findByIdAndUpdate({ _id: task_id }, { $push: { metadata: title } });
};
const updateTask = async (_id, status) => {
  return await Task.updateOne({ _id }, { status: status });
};
const deleteTask = async (_id) => {
  return await Task.deleteOne({ _id });
};
const updateSubTask = async (task_id, subtask_id, status) => {
  return await Task.findByIdAndUpdate({ _id: task_id, 'metadata._id': subtask_id }, { $set: { 'metadata.status': status } });
};
const getTask = async (category_id) => {
  return await Task.find({ category_id: category_id });
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  createSubTask,
  updateSubTask,
  getTask,
};
