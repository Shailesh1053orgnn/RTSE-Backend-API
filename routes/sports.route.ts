import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { sportsController } from "../controllers/sportsController.js";
//property Management
router.get('/findAll/', sportsController.findAll);
router.get('/sportsname/', sportsController.findByName);
export default router;