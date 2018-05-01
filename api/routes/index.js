import { Router } from 'express';
import contactRoutes from './contact.routes';

const router = new Router();

router.use(contactRoutes);

export default router;
