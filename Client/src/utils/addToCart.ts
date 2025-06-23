import { useState } from "react";
import type { Product } from "../Data/Product";
import { useNavigate } from "react-router-dom";

export const handleAddToCart = () => {
  const [productData, setProductData] = useState<Product | null>(null);
  const [addToCart, setAddToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("8");
  const navigate = useNavigate();

  if (!productData) return;

  setAddToCart(true);

  const newProduct = {
    id: productData.id,
    name: productData.title,
    price: productData.price,
    selectedSize,
    images: productData.thumbnails,
    quantity: 1,
  };

  const existingCart = JSON.parse(localStorage.getItem("cartProducts") || "[]");

  const existingIndex = existingCart.findIndex(
    (item: any) =>
      item.id === newProduct.id && item.selectedSize === newProduct.selectedSize
  );

  if (existingIndex !== -1) {
    existingCart[existingIndex].quantity += 1;
  } else {
    existingCart.push(newProduct);
  }

  localStorage.setItem("cartProducts", JSON.stringify(existingCart));

  navigate("/cart");
};
