import { Router } from "express";
import { aiChat } from "../controllers/aicontroller.js";

const router = Router();

router.route('/get-ai-result').post(aiChat);

export default router;