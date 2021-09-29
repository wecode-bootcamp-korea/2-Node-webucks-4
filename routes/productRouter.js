import express from 'express';
import { productControler } from '../controller';

const Router = express.Router();

Router.get('/:id', productControler.getProductDetail);

export default Router;
