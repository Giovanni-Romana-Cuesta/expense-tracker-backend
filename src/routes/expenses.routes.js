/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getOneExpense,
  updateExpense,
} from '../controllers/expenses.controllers.js';

const expensesRouter = Router();

expensesRouter.get('/', getAllExpenses);

expensesRouter.get('/:id', getOneExpense);

expensesRouter.post('/', createExpense);

expensesRouter.delete('/:id', deleteExpense);

expensesRouter.put('/:id', updateExpense);

export default expensesRouter;
