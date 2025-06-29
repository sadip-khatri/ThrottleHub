/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

interface Product {
  id: number;
  title: string;
  price: number; 
  convertedPrice?: number; 
  originalPrice?: number;
  discount?: number;
  category?: string;
  subcategory?: string;
  shipping?: string;
  size?: string[];
  colors?: string[];
  images?: string[];
  image?: string;
}

interface ProductPageProps {
  product: Product;
  currencyCode: string; // e.g. "NPR", "USD"
  onAddToCart: (
    product: Product,
    size?: string,
    quantity?: number,
    color?: string
  ) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({
  product,
  currencyCode,
  onAddToCart,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.size?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    condition: false,
    styleAndFit: false,
    myLoveStory: false,
  });

  const productImages =
    product.images || (product.image ? [product.image] : []);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity, selectedColor);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4 text-sm text-gray-500">
        Home / {product.category || "Products"}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-6 pb-8">
        {/* Left - Thumbnails */}
        {productImages.length > 1 && (
          <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`w-16 h-20 cursor-pointer border-2 ${
                  selectedImage === index ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Center - Main Image */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="relative bg-gray-100 aspect-[3/4] max-w-md mx-auto">
            {productImages.length > 0 ? (
              <img
                src={productImages[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
            {product.discount && (
              <div className="absolute top-4 left-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {product.discount}%
              </div>
            )}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex-1 space-y-6 order-3">
          {product.discount && (
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Exclusive
            </div>
          )}

          <h1 className="text-2xl font-light tracking-wide">{product.title}</h1>

          {(product.category || product.subcategory) && (
            <div className="text-sm text-gray-600">
              {product.category && product.subcategory
                ? `${product.category} • ${product.subcategory}`
                : product.category || product.subcategory}
            </div>
          )}

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl text-red-600">
                {formatPrice(
                  product.convertedPrice ?? product.price,
                  currencyCode
                )}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(
                      product.originalPrice *
                        (product.convertedPrice
                          ? product.convertedPrice / product.price
                          : 1),
                      currencyCode
                    )}
                  </span>
                  {product.discount && (
                    <span className="text-sm text-red-600">
                      {product.discount}% off on{" "}
                      {formatPrice(
                        product.originalPrice *
                          (product.convertedPrice
                            ? product.convertedPrice / product.price
                            : 1),
                        currencyCode
                      )}
                    </span>
                  )}
                </>
              )}
            </div>
            {product.shipping && (
              <div className="text-sm text-gray-600">
                Shipping {product.shipping}
              </div>
            )}
          </div>

          {/* Color */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">COLOUR</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    } ${
                      color.toLowerCase() === "red"
                        ? "bg-red-600"
                        : color.toLowerCase() === "ivory" ||
                          color.toLowerCase() === "white"
                        ? "bg-gray-100"
                        : color.toLowerCase() === "black"
                        ? "bg-black"
                        : color.toLowerCase() === "blue"
                        ? "bg-blue-600"
                        : "bg-gray-400"
                    }`}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-600">{selectedColor}</div>
            </div>
          )}

          {/* Size */}
          {product.size && product.size.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">SIZE</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-20 text-center bg-white"
              >
                {product.size.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-amber-700 text-white py-3 px-6 font-medium tracking-wide hover:bg-amber-800 transition-colors"
          >
            ADD TO CART
          </button>

          {/* Expandable Sections */}
          <div className="space-y-4 border-t pt-6">
            {[
              { key: "description", label: "DESCRIPTION" },
              { key: "condition", label: "CONDITION" },
              { key: "styleAndFit", label: "STYLE & FIT" },
              { key: "myLoveStory", label: "MY LOVE STORY" },
            ].map(({ key, label }) => (
              <div key={key} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() =>
                    toggleSection(key as keyof typeof expandedSections)
                  }
                  className="flex items-center justify-between w-full text-left text-sm font-medium"
                >
                  <span>{label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      expandedSections[key as keyof typeof expandedSections]
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
                {expandedSections[key as keyof typeof expandedSections] && (
                  <div className="mt-3 text-sm text-gray-600">
                    Content for {label.toLowerCase()} section would go here.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
