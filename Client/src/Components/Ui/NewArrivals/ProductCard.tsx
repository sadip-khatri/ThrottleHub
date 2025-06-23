// src/Ui/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => (
  <div className="bg-white border p-3 shadow-sm">
    <img src={image} alt={title} className="w-full h-72 object-cover" />
    <h3 className="text-sm text-gray-600 mt-2">{title}</h3>
    <p className="text-md font-semibold">Rs. {price.toLocaleString()}</p>
  </div>
);

export default ProductCard;
