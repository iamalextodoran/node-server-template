import multer from "multer";

import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";
import { isAuth } from "../util.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", isAuth, upload.array("image"), createProduct);
router.put("/:id", isAuth, upload.array("image"), updateProduct);
router.delete("/:id", isAuth, deleteProduct);

export default router;
