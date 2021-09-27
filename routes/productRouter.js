import express from 'express';
import controller from '../controlleres';

const { productController } = controller;
const productRouter = express.Router();

productRouter.get('/', productController.findAllProducts);
productRouter.get('/:id', productController.findProduct);

export default productRouter;
