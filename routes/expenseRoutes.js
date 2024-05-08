import express from 'express';
import { check } from 'express-validator';
import { addExpense, getExpenses, getGroupedExpenses, getMonthlyExpenses } from '../controllers/expenseController.js';
import validationMiddleware from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/', [
  check('title', 'Title is required').not().isEmpty(),
  check('date', 'Date is required').not().isEmpty(),
  check('amount', 'Amount is required').not().isEmpty().isNumeric(),
  check('category', 'Category is required').not().isEmpty()
], validationMiddleware, addExpense);

router.get('/', getExpenses);

router.get('/grouped', getGroupedExpenses);

router.get('/category/:categoryId/monthly', getMonthlyExpenses);

export default router;
