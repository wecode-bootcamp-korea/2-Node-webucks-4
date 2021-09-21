import express from 'express';
import { userController } from '../controlleres';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/sign', userController.findAllUsers);
router.post('/sign', userController.createUser);

router.get('/login', userController.isLoginCheck);

// router.get('/product', productController);
// router.post('/products', productController);

export default router;
