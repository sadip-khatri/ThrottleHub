import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/", authenticate, getCart);
router.post("/", authenticate, addToCart);
router.delete("/:productId", authenticate, removeFromCart);

export default router;
