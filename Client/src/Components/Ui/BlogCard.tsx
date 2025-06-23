import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<ProductCardProps> = ({ image, name, title, date }) => {
  return (
    <div className="min-w-[180px] sm:min-w-[220px] max-w-[240px] bg-[#f8f5f1] rounded-md overflow-hidden shadow-sm">
      <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-3">
        <p className="text-sm text-gray-500 pb-2">{name}</p>
        <h4 className="text-xs font-semibold uppercase tracking-wider pb-2">
          {title}
        </h4>
        <p className="text-base font-semibold mt-1 text-gray-500">
          {date.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
