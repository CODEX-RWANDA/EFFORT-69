import { Router } from 'express';
import Controller from '../controllers/project';
import * as Validations from '../middlewares/validation/project';
import * as Authorization from '../middlewares/authorization';

const router = Router();
router.post('/new', Authorization.isUser, Validations.createProject, Controller.createProject);
export default router;
