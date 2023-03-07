import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { academyController } from "../controllers/academyController.js";
router.get('/findAll/', academyController.findAll);
router.get('/findById/', academyController.findById);
export default router;