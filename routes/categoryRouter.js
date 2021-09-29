import express from 'express';
import controller from '../controlleres';

const { categoryController } = controller;
const router = express.Router();

router.get('/', categoryController.findAllCategories);

export default router;
