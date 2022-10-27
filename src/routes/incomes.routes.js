/* eslint-disable import/extensions */
import { Router } from 'express';
import Incomes from '../models/incomes.js';

const incomesRouter = Router();

incomesRouter.get('/', (req, res) => {
  Incomes.find()
    .then((expenses) => {
      res.status(200).json(expenses);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

incomesRouter.get('/:id', (req, res) => {
  const incomeId = req.params.id;

  if (incomeId) {
    Incomes.findById(incomeId)
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

incomesRouter.post('/', async (req, res) => {
  const { title, description, value } = req.body;
  const tempExpense = { title, description, value };
  Incomes.create(tempExpense)
    .then((newExpense) => {
      res.status(200).send(newExpense.toJSON());
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

incomesRouter.delete('/:id', (req, res) => {
  const incomeId = req.params.id;

  if (incomeId) {
    Incomes.findByIdAndDelete({ _id: incomeId })
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

incomesRouter.put('/:id', (req, res) => {
  const incomeId = req.params.id;
  const { title, description, value } = req.body;

  const data = { title, description, value };

  if (incomeId) {
    Incomes.findByIdAndUpdate({ _id: incomeId }, data, { new: true })
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
export default incomesRouter;
