import express from 'express';
import createControler from '../controller/createControler';

const router = express.Router();

router.post('/create', createControler);

module.exports = router;
