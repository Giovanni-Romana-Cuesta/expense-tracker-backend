/* eslint-disable import/extensions */
import { Router } from 'express';
import Expenses from '../models/expense.js';

const expensesRouter = Router();

expensesRouter.get('/', (req, res) => {
  Expenses.find()
    .then((expenses) => {
      res.status(200).json(expenses);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

expensesRouter.get('/:id', (req, res) => {
  const expenseId = req.params.id;

  if (expenseId) {
    Expenses.findById(expenseId)
      .then((expense) => {
        res.status(200).json(expense);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  } else {
    res.status(400).json({ status: 400, message: 'Bad request, missing expense id' });
  }
});

expensesRouter.post('/', async (req, res) => {
  const { title, description, value } = req.body;
  const tempExpense = { title, description, value };
  Expenses.create(tempExpense)
    .then((newExpense) => {
      res.status(200).send(newExpense.toJSON());
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

expensesRouter.delete('/:id', (req, res) => {
  const expenseId = req.params.id;

  if (expenseId) {
    Expenses.findByIdAndDelete({ _id: expenseId })
      .then(() => {
        res.status(200).json({ status: 200, message: 'Expense deleted' });
      })
      .catch((error) => {
        res.json(400).json({ message: error.message });
      });
  } else {
    res.status(400).json({ status: 400, message: 'Bad request, missing expense id' });
  }
});

expensesRouter.put('/:id', (req, res) => {
  const expenseId = req.params.id;
  const { title, description, value } = req.body;

  const data = { title, description, value };

  if (expenseId) {
    Expenses.findByIdAndUpdate({ _id: expenseId }, data, { new: true })
      .then((updatedExpense) => {
        res.status(200).json(updatedExpense);
      })
      .catch((error) => {
        res.json(400).json({ message: error.message });
      });
  } else {
    res.status(400).json({ status: 400, message: 'Bad request, missing expense id' });
  }
});
export default expensesRouter;
