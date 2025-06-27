import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;   
  image: string;
  title: string;
  price: number;
  category: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="block bg-[#F0E6DA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover object-center group-hover:opacity-75 bg-[#F0E6DA]"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-[#754C29]">{title}</h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">
          Rs. {price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
