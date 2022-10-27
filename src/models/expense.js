import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  value: { type: Number, required: true },
  date: { type: Number, required: false, default: Date.now() },
});

expenseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Expenses = model('Expense', expenseSchema);

export default Expenses;
