// src/Ui/ProductCard.tsx
import React from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { useCountry } from "../../../Contexts/CountryContext"; 

interface ProductCardProps {
  image: string;
  title: string;
  price: number; // base price in USD
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  const { selectedCountry } = useCountry();

  const convertedPrice = price * selectedCountry.rate;

  return (
    <div className="bg-white border p-3 shadow-sm">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <h3 className="text-sm text-gray-600 mt-2">{title}</h3>
      <p className="font-semibold mt-1">
        {formatPrice(convertedPrice, selectedCountry.currency)}
      </p>
    </div>
  );
};

export default ProductCard;
