import { Router } from "express";

import { SignUp } from "../controllers/authController.js";

const router = Router();

router.route('/create-user').post(SignUp);

export default router;