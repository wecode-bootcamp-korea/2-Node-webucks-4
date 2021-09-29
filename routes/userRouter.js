import express from 'express';
import { userControler } from '../controller';

const Router = express.Router();

Router.post('/signin', userControler.createUser);
Router.post('/login', userControler.login);

export default Router;
