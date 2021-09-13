import express from 'express';
import storeRouter from './router/store.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.use('/store', storeRouter);
app.listen(8080);


