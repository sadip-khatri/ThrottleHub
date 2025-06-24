import express from "express";
import {
  getUserProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.use(authenticate);

router.get("/", getUserProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
