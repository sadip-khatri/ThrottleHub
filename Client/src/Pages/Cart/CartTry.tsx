
import React from "react";
import { ChevronDown } from "lucide-react";

const CartTry: React.FC = () => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle email input (if needed)
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Handle size select (if needed)
  };

  return (
    <div className="font-sans text-gray-800 bg-amber-200 min-h-screen">
      {/* Main Section */}
      <main className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Images Section */}
          <div className="flex md:flex-row flex-col gap-4 w-full max-w-md mx-auto">
            {/* Other Images - left column on desktop, top row on mobile */}
            <div className="flex md:flex-col flex-row md:justify-start justify-center gap-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-14 h-14 bg-red-500 rounded overflow-hidden border border-gray-300 shrink-0"
                ></div>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="aspect-[3/4] w-full">
              <img
                src="public/4736760a52d9089593f4697fa8dcc1a92660d619.jpg"
                alt="product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="max-w-lg w-full mx-auto md:mx-0 px-2 md:px-0">
            <h2 className="text-2xl font-semibold mb-2">TALLER MARMO</h2>
            <p className="text-sm mb-1">Dresses - Size 10</p>
            <p className="text-sm text-gray-600 mb-4">Rs. 5,500</p>

            {/* Color */}
            <div className="mb-4">
              <span className="font-medium">Color:</span>
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-black"></div>
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Size</label>
              <select
                className="border px-3 py-2 rounded w-32"
                onChange={handleSelectChange}
              >
                <option>10</option>
              </select>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-[#8B5D3B] hover:bg-[#754C29] text-white px-6 py-3 rounded-full font-medium w-full mb-6">
              Add to Cart
            </button>

            {/* Dropdown Sections */}
            {["Description", "Condition", "Style & Fit", "My Love Story"].map(
              (section, i) => (
                <div
                  key={i}
                  className="border-b py-4 flex justify-between items-center cursor-pointer"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartTry;
