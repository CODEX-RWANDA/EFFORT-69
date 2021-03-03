import { Router } from 'express';
import user from './user';
import project from './project';

const router = Router();
router.use('/users', user);
router.use('/project', project);
export default router;
