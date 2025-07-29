/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../../Ui/ProductCard";
import api from "../../../Utils/api";

type Product = {
  _id: string;
  mainImage: string;
  title: string;
  price: number;
  fit: string;
  stock: number;
};

const ExclusiveCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<"relevance" | "low" | "high">(
    "relevance"
  );

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      const processed = res.data.map((p: any) => ({
        ...p,
        stock: p.stock ?? (Math.random() > 0.5 ? 0 : 10),
      }));
      setProducts(processed);
    } catch (err) {
      console.error("Failed to fetch products", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Select only one product per fit (the one with the highest price)
  const topProductsByFit = useMemo(() => {
    const fitMap = new Map<string, Product>();

    products.forEach((product) => {
      const current = fitMap.get(product.fit);
      if (!current || product.price > current.price) {
        fitMap.set(product.fit, product);
      }
    });

    let topProducts = Array.from(fitMap.values());

    // Apply sorting
    if (sortOption === "low") {
      topProducts = topProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      topProducts = topProducts.sort((a, b) => b.price - a.price);
    }
    // relevance: no sorting, keep as is

    return topProducts;
  }, [products, sortOption]);

  return (
    <div className="px-4 md:px-16 py-10 bg-surface text-primary">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-4 border-b border-gray-300 pb-3 text-center">
        EXCLUSIVE COLLECTION
      </h2>

      {/* Sorting */}
      <div className="flex justify-end py-4 mb-8">
        <select
          className="border px-3 py-2 rounded text-sm bg-background"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as any)}
        >
          <option value="relevance">Sort by Relevance</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 mt-10">
          Loading products...
        </div>
      ) : topProductsByFit.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No exclusive products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {topProductsByFit.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.mainImage}
              title={product.title}
              price={product.price}
              fit={product.fit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExclusiveCollections;
