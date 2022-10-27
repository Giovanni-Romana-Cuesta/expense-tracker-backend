import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/database.js';
import expensesRouter from './routes/expenses.routes.js';
import incomesRouter from './routes/incomes.routes.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 300;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Routers
app.use('/expenses', expensesRouter);
app.use('/incomes', incomesRouter);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  connectDB();
});
