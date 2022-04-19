import multer from "multer";

import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.array("image"), createProduct);
router.delete("/:id", deleteProduct);

export default router;
