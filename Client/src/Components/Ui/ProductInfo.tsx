// src/Components/ProductInfo.tsx
import type { Product } from "../../Data/Product";
import { useState } from "react";

const ProductInfo = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState(product.size[0]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">Dresses - Size {selectedSize}</p>
      <p className="text-xl font-semibold text-gray-700">
        NPR. {product.price}
      </p>

      <div className="flex items-center space-x-3">
        <span>Color:</span>
        <div
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: product.color }}
        />
      </div>

      <div>
        <label htmlFor="size" className="block font-medium mb-1">
          Size
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded"
        >
          {product.size.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <button className="bg-[#8B5C33] text-white w-full py-3 rounded-full hover:bg-[#754726] transition">
        Add to Cart
      </button>

      {/* Accordion */}
      <div className="divide-y mt-4 border-t">
        {[
          { title: "Description", content: product.description },
          { title: "Condition", content: product.condition },
          { title: "Style & Fit", content: product.fit },
          { title: "My Love Story", content: product.story },
        ].map(({ title, content }) => (
          <details key={title} className="py-2 cursor-pointer">
            <summary className="font-medium">{title}</summary>
            <p className="text-sm mt-1">{content}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
