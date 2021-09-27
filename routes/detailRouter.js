import express from 'express';
import { detailControler } from '../controller';

const Router = express.Router();

Router.get('/detaildata/:id', detailControler.detailDataControler);

export default Router;
