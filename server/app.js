import express from 'express';
import storeRouter from './router/store.js'
import cors from 'cors';
import { config } from './config.js';
import { connectDB } from './database/database.js';
import { Server } from 'socket.io';
import { initSocket } from './connection/socket.js';
import cron from 'node-cron';
import * as storeController from './controller/store.js'

const app = express();
app.use(express.json());
app.use(cors());


app.use('/store', storeRouter);
 // 상품생성
 cron.schedule('0 7 * * * *', () => {
   console.log('매 시간 7분 때 경매상품 확인');
  storeController.getfinish();
  
});
connectDB().then(() => {
    console.log('init!');
    const server = app.listen(config.host.port);
    initSocket(server);
  }).catch(console.error)


