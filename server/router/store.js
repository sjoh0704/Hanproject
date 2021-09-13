import express from 'express';
import * as storeController from '../controller/store.js';

const router = express.Router();



router.get('/', storeController.getProducts);

router.get('/:id', storeController.getProduct);

router.post('/productadd', storeController.createProduct)

router.put('/:id', storeController.plusProduct)

export default router;