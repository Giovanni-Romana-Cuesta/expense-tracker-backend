import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  value: { type: Number, required: true },
  date: { type: Date, required: false, default: Date.now() },
});

const expenseModel = model('Expense', expenseSchema);

export default expenseModel;
