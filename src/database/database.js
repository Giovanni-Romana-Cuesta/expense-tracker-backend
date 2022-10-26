import mongoose from 'mongoose';

const connectDB = async () => {
  const URI = process.env.MONGODB_URI;

  if (!URI) {
    console.log('Missing URI for connection tu mongo atlas');
    return;
  }

  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Success connection to the database');
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export default connectDB;
