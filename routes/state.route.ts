import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { StateController } from "../controllers/stateController.js";
router.get('/findAll/', StateController.findAll);
router.get('/findById/', StateController.findById);
export default router;