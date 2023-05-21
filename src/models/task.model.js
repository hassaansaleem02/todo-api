const mongoose = require('mongoose');

const metadata = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  metadata: {
    type: [metadata],
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
