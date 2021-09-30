import express from 'express';
import controller from '../controlleres';

const { productController } = controller;
const router = express.Router();

router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProduct);

export default router;
