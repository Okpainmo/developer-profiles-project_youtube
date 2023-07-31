// dependency imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// local imports

import profilesRouter from './routes/profilesRouter.js';

// dependency initializations
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

/** end points **/

// test end-point
app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'hello world!!! - WELCOME TO THE DEVELOPER PROFILES PROJECT.\n.................\n\nAll endpoints.\n\n1. /create-profile.\n2. /get-all-profiles.\n3. /update-profile.\n4. /delete-profile.'
    );
});

app.use('/api/v1/profiles', profilesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(process.env.MONGO_DB_URI);

  console.log('Database connected successfully \n..................');
  console.log('Server is running on port 5000');
});
