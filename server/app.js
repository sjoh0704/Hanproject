import express from 'express';
import storeRouter from './router/store.js'
import cors from 'cors';
import { config } from './config.js';
import { connectDB } from './database/database.js';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/store', storeRouter);

connectDB().then(() => {
    console.log('init!');
    app.listen(config.host.port);
  }).catch(console.error)
