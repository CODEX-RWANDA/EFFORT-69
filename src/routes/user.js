import { Router } from 'express';
import Controller from '../controllers/user';

const router = Router();
router.post('/social-login', Controller.socialSignUp);

export default router;
