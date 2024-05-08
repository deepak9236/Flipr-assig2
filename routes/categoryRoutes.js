// routes/categories.js

import express from 'express';
import { check } from 'express-validator';
import { addCategory, getCategories, deleteCategory } from '../controllers/categoryController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';

const router = express.Router();

// Add a new category
router.post('/', [
  check('name', 'Name is required').not().isEmpty()
], validationMiddleware, addCategory);

// Retrieve categories
router.get('/', getCategories);

// Delete a category
router.delete('/:categoryId', deleteCategory);

export default router;
