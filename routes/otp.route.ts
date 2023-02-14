import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { otpController } from "../controllers/otpController.js";
//lead Managemet
router.post('/',  otpController.sendotp);
router.get('/:verifyotp',  otpController.verifyotp);
export default router;