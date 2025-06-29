import express from "express";
import {
  getAllProducts,
  getUserProducts,
  getProductById, 
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controllers/productController";

const router = express.Router();

router.get("/", getAllProducts); 
router.get("/user", getUserProducts); 
router.get("/search", searchProducts);
router.get("/:id", getProductById); 
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
