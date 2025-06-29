import { Request, Response } from "express";
import Product from "../models/Product";

// GET /api/products
export const getUserProducts = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const products = await Product.find({ user: userId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (err) {
    console.error("Failed to fetch all products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const {
      title,
      description,
      price,
      size,
      color,
      mainImage,
      thumbnails,
      condition,
      fit,
      story,
    } = req.body;

    const newProduct = new Product({
      title,
      description,
      price,
      size,
      color,
      mainImage,
      thumbnails,
      condition,
      fit,
      story,
      user: userId,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const product = await Product.findOne({ _id: req.params.id, user: userId });

    if (!product) return res.status(404).json({ message: "Product not found" });

    const {
      title,
      description,
      price,
      size,
      color,
      mainImage,
      thumbnails,
      condition,
      fit,
      story,
    } = req.body;

    if (title !== undefined) product.title = title;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (size !== undefined) product.size = size;
    if (color !== undefined) product.color = color;
    if (mainImage !== undefined) product.mainImage = mainImage;
    if (thumbnails !== undefined) product.thumbnails = thumbnails;
    if (condition !== undefined) product.condition = condition;
    if (fit !== undefined) product.fit = fit;
    if (story !== undefined) product.story = story;

    const updated = await product.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      user: userId,
    });

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
