import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { spaceTypeController } from "../controllers/spaceTypeController.js";
//property Management
router.get('/findAll/', spaceTypeController.findAll);
router.get('/findById/', spaceTypeController.findById);
export default router;