import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
