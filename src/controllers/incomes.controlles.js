import Incomes from '../models/incomes.js';

export const getAllIncomes = (req, res) => {
  Incomes.find()
    .then((expenses) => {
      res.status(200).json(expenses);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

export const getOneIncome = (req, res) => {
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
};

export const createIncome = (res, req) => {
  const { title, description, amount } = req.body;
  const tempExpense = { title, description, amount };
  Incomes.create(tempExpense)
    .then((newExpense) => {
      res.status(200).send(newExpense.toJSON());
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

export const deleteIncome = (req, res) => {
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
};

export const updateIncome = (req, res) => {
  const incomeId = req.params.id;
  const { title, description, amount } = req.body;

  const data = { title, description, amount };

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
};
