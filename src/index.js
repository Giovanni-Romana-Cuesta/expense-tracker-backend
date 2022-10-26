/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/database.js';
import expenseModel from './models/expense.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 300;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Expense Tracker API</h1>');
});

app.post('/expense/create', async (req, res) => {
  const tempExpense = { title: 'Mi primer gasto', description: 'Desc', value: 50000 };
  expenseModel
    .create(tempExpense)
    .then((newExpense) => {
      res.status(200).json(newExpense);
    })
    .catch((error) => {
      res.status(400).json({ status: 400, error });
    });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  connectDB();
});
