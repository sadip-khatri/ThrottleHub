// src/Ui/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { useCountry } from "../../Contexts/CountryContext";

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
  const isExclusive = category?.toLowerCase() === "exclusive";

  return (
    <Link
      to={`/product/${id}`}
      className="relative block bg-[#F0E6DA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Exclusive Badge */}
      {isExclusive && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded z-10">
          EXCLUSIVE
        </span>
      )}

      {/* Product Image */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover object-center bg-[#F0E6DA]"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-[#754C29]">{title}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          {formatPrice(localPrice, selectedCountry.currency)}
        </p>

        {onAddToCart && (
          <button
            onClick={(e) => {
              e.preventDefault(); 
              onAddToCart();
            }}
            className="mt-3 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
