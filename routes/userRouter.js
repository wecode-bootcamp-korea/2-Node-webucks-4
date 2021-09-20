import express from 'express';
import { userController } from '../controlleres';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/users', userController.findAllUsers);
router.post('/users', userController.createUser);

router.get('/product', userController.findAllUsers);
router.get('/products', userController.findAllUsers);

router.get('/login', userController.findAllUsers);

export default router;
