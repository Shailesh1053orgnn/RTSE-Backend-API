import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { StateController } from "../controllers/stateController.js";
//property Management
router.get('/', StateController.findAll);
router.get('/:state_id', StateController.findById);
export default router;