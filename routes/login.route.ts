import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { loginController } from "../controllers/loginController.js";
//lead Managemet
router.get('/',  loginController.login);
//router.get('/:otp',  signupController.login);
export default router;