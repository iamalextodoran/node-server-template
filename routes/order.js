import { Router } from "express";

import { getOrders } from "../controllers/order.js";

const router = Router();

router.get("/", getOrders);

export default router;
