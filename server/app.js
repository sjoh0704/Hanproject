import express from 'express';
import storeRouter from './router/store.js'


const app = express();
app.use(express.json())


app.use('/store', storeRouter);
app.listen(8080);


