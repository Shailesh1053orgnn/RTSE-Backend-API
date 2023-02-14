import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { signupController } from "../controllers/signupController.js";
//lead Managemet
router.post('/',  signupController.register);
//router.get('/:otp',  signupController.login);
export default router;