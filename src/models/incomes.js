import { Schema, model } from 'mongoose';

const incomeSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  creationDate: { type: String, required: true },
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
