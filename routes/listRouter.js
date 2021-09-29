import express from 'express';
import { listControler } from '../controller';

const Router = express.Router();

Router.get('/', listControler.getListData);

export default Router;
