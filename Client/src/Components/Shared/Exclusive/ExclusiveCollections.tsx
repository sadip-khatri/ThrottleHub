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
  category: string;
  stock: number;
};

const categories = ["All", "Mobiles", "Laptops", "Headphones", "phone cases"];

const ExclusiveCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortOption, setSortOption] = useState("relevance");
  const [loading, setLoading] = useState(true);

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

  const filterAndSortProducts = useMemo(() => {
    let filtered: Product[] = [];

    if (selectedCategory === "All") {
      const categorySet = ["Mobiles", "Laptops", "Headphones", "Phone Cases"];
      categorySet.forEach((cat) => {
        const match = products.find(
          (p) =>
            p.category === cat &&
            p.price >= priceRange[0] &&
            p.price <= priceRange[1] &&
            (stockFilter === "all" ||
              (stockFilter === "in" && p.stock > 0) ||
              (stockFilter === "out" && p.stock === 0))
        );
        if (match) filtered.push(match);
      });
    } else {
      const categoryFiltered = products.filter(
        (p) =>
          p.category === selectedCategory &&
          p.price >= priceRange[0] &&
          p.price <= priceRange[1] &&
          (stockFilter === "all" ||
            (stockFilter === "in" && p.stock > 0) ||
            (stockFilter === "out" && p.stock === 0))
      );

      if (sortOption === "low") {
        categoryFiltered.sort((a, b) => a.price - b.price);
      } else if (sortOption === "high") {
        categoryFiltered.sort((a, b) => b.price - a.price);
      }

      if (categoryFiltered.length > 0) {
        filtered.push(categoryFiltered[0]); // show only one product
      }
    }

    return filtered;
  }, [products, selectedCategory, stockFilter, priceRange, sortOption]);

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/5">
            <div className="space-y-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-1">PRODUCT COLLECTION</h2>
              <p className="text-sm text-gray-500 mb-6">
                {filterAndSortProducts.length} item(s)
              </p>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium mb-2">CATEGORIES</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-[#2563eb]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium mb-3">PRICE RANGE</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Rs. {priceRange[0]}</span>
                    <span>Rs. {priceRange[1]}</span>
                  </div>

                  <div className="relative h-6">
                    <input
                      type="range"
                      min={0}
                      max={10000}
                      step={100}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], +e.target.value])
                      }
                      className="absolute z-20 w-full h-1 bg-transparent appearance-none pointer-events-auto accent-[#2563eb]"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-gray-300 z-0" />
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-[2px] bg-[#2563eb] z-0"
                      style={{
                        left: `${(priceRange[0] / 10000) * 100}%`,
                        width: `${
                          ((priceRange[1] - priceRange[0]) / 10000) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Stock Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">AVAILABILITY</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  {["all", "in", "out"].map((status) => (
                    <label
                      key={status}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="stock"
                        className="accent-[#2563eb]"
                        value={status}
                        checked={stockFilter === status}
                        onChange={() => setStockFilter(status as any)}
                      />
                      {status === "all"
                        ? "All"
                        : status === "in"
                        ? "In Stock"
                        : "Out of Stock"}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting */}
            <div className="flex justify-end py-4 mb-8">
              <select
                className="border px-3 py-2 rounded text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            {filterAndSortProducts.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filterAndSortProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    image={product.mainImage}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExclusiveCollections;
