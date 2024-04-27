import { Router } from "express";

import { Login, SignUp } from "../controllers/authController.js";

const router = Router();

router.route('/create-user').post(SignUp);
router.route('/login-user').post(Login);

export default router;