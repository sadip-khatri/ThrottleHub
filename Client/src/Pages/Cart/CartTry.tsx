
export default CartTry
import React from "react";
import { ChevronDown } from "lucide-react";

const CartTry: React.FC = () => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Optionally handle email input change
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Optionally handle size select change
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="border-b px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dangiz</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-sm"
        />
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
              alt="product"
              className="rounded-lg w-full"
            />
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded overflow-hidden"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">TALLER MARMO</h2>
            <p className="text-sm mb-1">Dresses - Size 10</p>
            <p className="text-sm text-gray-500 mb-4">Rs. 5,500</p>

            <div className="mb-4">
              <span className="font-medium">Color:</span>
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-black"></div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-1 font-medium">Size</label>
              <select
                className="border px-3 py-2 rounded w-32"
                onChange={handleSelectChange}
              >
                <option>10</option>
              </select>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full font-medium w-full">
              Add to Cart
            </button>

            {/* Dropdowns */}
            {["Description", "Condition", "Style & Fit", "My Love Story"].map(
              (section: string, i: number) => (
                <div
                  key={i}
                  className="border-t py-4 flex justify-between items-center cursor-pointer"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Similar Items */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-6">Similar Items</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i: number) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden text-center"
              >
                <div className="h-60 bg-gray-100"></div>
                <p className="text-sm mt-2">CRINKLE STRIPE DRESS</p>
                <p className="text-sm font-medium">Rs. 2,000</p>
              </div>
            ))}
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((_, i: number) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden text-center"
              >
                <div className="h-60 bg-gray-100"></div>
                <p className="text-sm mt-2">CRINKLE STRIPE DRESS</p>
                <p className="text-sm font-medium">Rs. 2,000</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 border-t pt-10 text-center">
          <p className="text-sm mb-2">
            Become part of the community. Discover new arrivals & get 10% off.
          </p>
          <div className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="border px-3 py-2 rounded"
              onChange={handleEmailChange}
            />
            <button className="bg-black text-white px-4 py-2 rounded">
              Join
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-600 text-center py-6 border-t">
        © 2025 Dangiz. All rights reserved.
      </footer>
    </div>
  );
};

export default CartTry;
