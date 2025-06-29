import { Request, Response } from "express";
import User from "../models/User";
import Product from "../models/Product";

// GET /api/cart
export const getCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const user = await User.findById(userId).populate("cart.product");

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ error: "Failed to get cart" });
  }
};

// POST /api/cart
export const addToCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
const { productId, size = "M", quantity = 1 } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingItem = user.cart.find(
  (item) =>
    item.product.toString() === productId && item.size === size
);

    if (existingItem) {
  existingItem.quantity += quantity;
} else {
  user.cart.push({ product: productId, size, quantity });
}

    await user.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
};

// DELETE /api/cart/:productId
export const removeFromCart = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { productId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter(
      (item) => item.product.toString() !== productId
    );

    await user.save();
    res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove from cart" });
  }
};

// PATCH /api/cart/:productId
export const updateCartItemQuantity = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { productId } = req.params;
    const { quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const item = user.cart.find((item) => item.product.toString() === productId);
    if (!item) return res.status(404).json({ message: "Cart item not found" });

    if (quantity <= 0) {
      user.cart = user.cart.filter(
        (item) => item.product.toString() !== productId
      );
    } else {
      item.quantity = quantity;
    }

    await user.save();
    res.status(200).json({ message: "Cart updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart" });
  }
};
