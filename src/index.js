import express from 'express';
import morgan from 'morgan';
import cors from 'cors'


const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Expense Tracker API</h1>');
});

app.listen(3001, () => {
  console.log('app running on port 3001');
});
