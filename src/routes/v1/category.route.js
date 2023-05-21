const express = require('express');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.post('/create-category', validate(categoryValidation.create_category), categoryController.createCategory);
router.post('/delete-category', validate(categoryValidation.delete_category), categoryController.deleteCategory);
router.get('/fetch-categories', categoryController.getCategory);

module.exports = router;
