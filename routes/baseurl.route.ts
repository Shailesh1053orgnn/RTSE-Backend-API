import express from "express";
const router = express.Router();
import { baseurlController } from "../controllers/baseurlController.js";
router.get('/',  baseurlController.baseurl);
export default router;