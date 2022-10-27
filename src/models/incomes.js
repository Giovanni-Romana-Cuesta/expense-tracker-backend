import { Schema, model } from 'mongoose';

const incomeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  value: { type: Number, required: true },
  date: { type: Number, required: false, default: Date.now() },
});

incomeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Incomes = model('Income', incomeSchema);

export default Incomes;
