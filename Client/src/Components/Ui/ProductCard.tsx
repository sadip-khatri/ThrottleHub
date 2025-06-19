import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="min-w-[180px] sm:min-w-[220px] max-w-[240px] bg-[#f8f5f1] rounded-md overflow-hidden shadow-sm">
      <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-3">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-base font-semibold mt-1">
          Rs. {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
