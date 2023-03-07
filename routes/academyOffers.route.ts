import express from "express";
const router = express.Router();
import { AcademyOffersController } from "../controllers/academyOffersController.js";
//property Management
//router.get('/', AcademyOffersController.findAll);
router.get('/findById', AcademyOffersController.findById);
export default router;