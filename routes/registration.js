import { Router } from "express";

import { register, logIn, logOut } from "../controllers/registration.js";

const router = Router();

router.post("/", register);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
