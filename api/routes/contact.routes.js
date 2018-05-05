import { Router } from 'express';
import * as ContactController from '../controllers/contact.controller';
// import { catchErrors } from '../errors/handleErrors';

const router = new Router();

// Get all jobs
router.route('/contact/proposal').post(ContactController.createContact);
router.route('/contact/phone').post(ContactController.createContactPhone);

export default router;
