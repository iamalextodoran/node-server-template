import { Router } from "express";

import { getOrders, getOrder, createOrder } from "../controllers/order.js";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);

export default router;
