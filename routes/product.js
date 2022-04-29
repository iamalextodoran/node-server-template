import multer from "multer";

import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";
import { authorizeUser } from "../util.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", authorizeUser, upload.array("image"), createProduct);
router.put("/:id", authorizeUser, upload.array("image"), updateProduct);
router.delete("/:id", authorizeUser, deleteProduct);

export default router;
