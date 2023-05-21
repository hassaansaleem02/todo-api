const express = require('express');
const validate = require('../../middlewares/validate');
const TaskValidation = require('../../validations/task.validation');
const TaskController = require('../../controllers/task.controller');

const router = express.Router();

router.post('/create-task', validate(TaskValidation.create_task), TaskController.createTask);
router.post('/update-task', validate(TaskValidation.update_task), TaskController.updateTask);
router.get('/get-task/:category_id', TaskController.getTask);
router.get('/delete-task/:task_id', TaskController.deleteTask);

router.post('/create-sub-task', validate(TaskValidation.create_sub_task), TaskController.createSubTask);
router.post('/update-sub-task', validate(TaskValidation.update_sub_task), TaskController.updateSubTask);

module.exports = router;
