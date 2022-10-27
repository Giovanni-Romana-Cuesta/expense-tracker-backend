/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getOneIncome,
  updateIncome,
} from '../controllers/incomes.controlles.js';

const incomesRouter = Router();

incomesRouter.get('/', getAllIncomes);

incomesRouter.get('/:id', getOneIncome);

incomesRouter.post('/', createIncome);

incomesRouter.delete('/:id', deleteIncome);

incomesRouter.put('/:id', updateIncome);

export default incomesRouter;
