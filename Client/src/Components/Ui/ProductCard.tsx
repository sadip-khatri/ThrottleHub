// src/Ui/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../Utils/formatPrice";
import { useCountry } from "../../Contexts/CountryContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  id: string; 
  image: string;
  title: string;
  price: number;
  category?: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  category,
  onAddToCart,
}) => {
  const { selectedCountry } = useCountry();
  const localPrice = price * selectedCountry.rate;

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100">
          <FaHeart className="w-4 h-4" />
        </button>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3 bg-[#2563eb] text-white px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-[#2563eb]">
            {formatPrice(localPrice, selectedCountry.currency)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {onAddToCart && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
              }}
              className="flex-1 bg-[#2563eb] text-white py-2 px-4 rounded-md font-medium hover:bg-[#1d4ed8] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          )}
          
          <Link
            to={`/product/${id}`}
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
