/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../../Ui/ProductCard";
import { Link } from "react-router-dom";
import api from "../../../Utils/api";

type Product = {
  _id: string;
  id: number;
  mainImage: string;
  title: string;
  price: number;
  fit: string;
  stock: number;
};

const categories = ["Bike Part", "Car Part"];
const itemsPerPage = 6;
const maxPrice = 25000000;

const Accessoriess: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        const filtered = res.data.filter((p: Product) =>
          categories.includes(p.fit)
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch accessories", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFitChange = (fit: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(fit) ? prev.filter((c) => c !== fit) : [...prev, fit]
    );
  };

  const sortedAndFiltered = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.fit));
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOption === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedCategories, priceRange, sortOption]);

  const totalPages = Math.ceil(sortedAndFiltered.length / itemsPerPage);
  const displayedProducts = sortedAndFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-surface text-primary">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 space-y-6 sticky top-20 self-start h-fit">
          <h2 className="text-2xl font-bold mb-1">ACCESSORIES</h2>
          <p className="text-sm text-primary mb-6">
            {loading ? "Loading..." : `${sortedAndFiltered.length} items`}
          </p>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium mb-2">CATEGORIES</h3>
            <div className="space-y-1 text-sm text-primary">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleFitChange(cat)}
                    className="accent-[#00FFFF]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium mb-3">PRICE RANGE</h3>
            <div className="space-y-2 text-sm text-primary">
              <div className="flex justify-between items-center">
                <span>Rs. {priceRange[0]}</span>
                <span>Rs. {priceRange[1]}</span>
              </div>

              <div className="relative h-6">
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  step={1000}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Math.max(+e.target.value, priceRange[0] + 1000),
                    ])
                  }
                  className="absolute z-20 w-full h-1 bg-transparent appearance-none pointer-events-auto accent-[#00FFFF]"
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-white z-90" />
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 h-[2px] bg-white z-0"
                  style={{
                    left: `${(priceRange[0] / maxPrice) * 100}%`,
                    width: `${
                      ((priceRange[1] - priceRange[0]) / maxPrice) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
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

          {loading ? (
            <div className="text-center text-primary mt-10">
              Loading products...
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="text-center text-primary mt-10">
              No accessories found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <Link
                    to={`/product/${product._id}`}
                    key={product._id}
                    className="block"
                  >
                    <ProductCard
                      id={product._id}
                      image={product.mainImage}
                      title={product.title}
                      price={product.price}
                      fit={product.fit}
                    />
                  </Link>
                ))}
              </div>

              <div className="flex justify-center items-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 border text-sm rounded hover:bg-gray-100 ${
                      currentPage === i + 1 ? "bg-[#00FFFF] text-white" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accessoriess;
