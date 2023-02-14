import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { StateMgmtController } from "../controllers/stateMgmtController.js";
//property Management
router.get('/', StateMgmtController.findAll);
router.get('/:state_id', StateMgmtController.findById);
export default router;