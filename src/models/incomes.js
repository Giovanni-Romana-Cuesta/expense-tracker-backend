import { Schema, model } from 'mongoose';

const incomeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  value: { type: Number, required: true },
  date: { type: Date, required: false, default: Date.now() },
});

export default model('Expense', incomeSchema);
