import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
