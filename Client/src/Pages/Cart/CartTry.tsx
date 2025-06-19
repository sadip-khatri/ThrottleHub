import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import productData from "../../ProductData/Productsinfo.json"; // Make sure this path is correct

const CartTry: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle size change if needed
  };

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <main className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <div className="flex md:flex-row flex-col gap-4 w-full max-w-md mx-auto">
            {/* Thumbnails */}
            <div className="flex md:flex-col flex-row md:justify-start justify-center gap-2 md:mt-63">
              {productData.images.thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-14 h-14 object-cover rounded border border-gray-300"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="aspect-[3/4] w-full">
              <img
                src={productData.images.main}
                alt={productData.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="max-w-lg w-full mx-auto md:mx-0 px-2 md:px-0">
            <h2 className="text-2xl font-semibold mb-2">{productData.name}</h2>
            <p className="text-sm mb-1">
              {productData.category} - Size {productData.selectedSize}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {productData.currency}. {productData.price}
            </p>

            {/* Colors */}
            <div className="mb-4">
              <span className="font-medium">Color:</span>
              <div className="flex space-x-2 mt-2">
                {productData.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full border-2 border-black"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Size</label>
              <select
                className="border px-3 py-2 rounded w-32"
                onChange={handleSelectChange}
                defaultValue={productData.selectedSize}
              >
                {productData.availableSizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Cart */}
            <button className="bg-[#8B5D3B] hover:bg-[#754C29] text-white px-6 py-3 rounded-full font-medium w-full mb-6">
              Add to Cart
            </button>

            {/* Expandable Sections */}
            {[
              { title: "Description", content: productData.description },
              { title: "Condition", content: productData.condition },
              { title: "Style & Fit", content: productData.styleAndFit },
              { title: "My Love Story", content: productData.loveStory }
            ].map((section, i) => (
              <div key={i} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <span className="font-medium">{section.title}</span>
                  {openSection === section.title ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
                {openSection === section.title && (
                  <p className="mt-2 text-sm text-gray-700">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartTry;
