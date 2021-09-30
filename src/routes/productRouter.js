import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.getAllProducts);

export default router;
