import express from 'express';
import { listControler } from '../controller';

const Router = express.Router();

Router.get('/listdata', listControler.listDataControler);

export default Router;
