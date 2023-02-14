import express from "express";
const router = express.Router();
import { AuthenticationController } from '../controllers/AuthenticationController.js';
//import auth from '../middleware/auth.js';
router.post('/',  AuthenticationController.authenticate);
export default router;