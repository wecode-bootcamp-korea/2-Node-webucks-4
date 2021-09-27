import express from 'express';
import { userControler } from '../controller';

const Router = express.Router();

Router.post('/signin', userControler.signinControler);
Router.post('/login', userControler.loginControler);

export default Router;
