import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { VenueController } from "../controllers/venueController.js";
router.get('/findAll/', VenueController.findAll);
router.get('/findById/', VenueController.findById);
export default router;