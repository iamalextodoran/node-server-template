import express from "express";
const router = express.Router();

import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
