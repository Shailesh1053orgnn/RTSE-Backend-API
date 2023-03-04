import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { academyController } from "../controllers/academyController.js";
//lead Managemet
router.get('/:location', academyController.findByLocation);
router.get('/', academyController.findAll);
export default router;