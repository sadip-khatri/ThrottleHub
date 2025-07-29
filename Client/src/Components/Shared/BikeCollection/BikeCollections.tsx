/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../../Ui/ProductCard";
import { Link } from "react-router-dom";
import api from "../../../Utils/api";

type Product = {
  _id: string;
  mainImage: string;
  title: string;
  price: number;
  fit: string;
  stock: number;
};

const itemsPerPage = 6;
const maxPrice = 4000000;

const BikeCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        const allProducts = res.data;

        console.log("All products fetched:", allProducts);

        // Filter products where fit is "Bike" (case-insensitive, trimmed)
        const bikeProducts = allProducts.filter(
          (p: Product) =>
            typeof p.fit === "string" && p.fit.trim().toLowerCase() === "bike"
        );

        console.log("Filtered Bike products:", bikeProducts);

        setProducts(bikeProducts);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleStockChange = (status: "all" | "in" | "out") => {
    setStockFilter(status);
    setCurrentPage(1);
  };

  const sortedAndFiltered = useMemo(() => {
    let filtered = products;

    if (stockFilter === "in") {
      filtered = filtered.filter((p) => p.stock > 0);
    } else if (stockFilter === "out") {
      filtered = filtered.filter((p) => p.stock === 0);
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
  }, [products, stockFilter, priceRange, sortOption]);

  const totalPages = Math.ceil(sortedAndFiltered.length / itemsPerPage);
  const displayedProducts = sortedAndFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-surface text-primary">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 sticky top-20 self-start space-y-6">
          <h2 className="text-2xl font-bold mb-1">BIKE COLLECTION</h2>
          <p className="text-sm text-primary mb-6">
            {loading ? "Loading..." : `${sortedAndFiltered.length} items found`}
          </p>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium mb-3">PRICE RANGE</h3>
            <div className="space-y-2 text-sm text-primary">
              <div className="flex justify-between">
                <span>Rs. {priceRange[0]}</span>
                <span>Rs. {priceRange[1]}</span>
              </div>

              <div className="relative h-6">
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  step={100}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Math.max(+e.target.value, priceRange[0] + 100),
                    ])
                  }
                  className="absolute z-20 w-full h-1 bg-transparent appearance-none pointer-events-auto accent-[#00FFFF]"
                />

                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-accent z-0" />
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

          {/* Stock Filter */}
          {/* <div>
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
                    value={status}
                    className="accent-[#00FFFF]"
                    checked={stockFilter === status}
                    onChange={() => handleStockChange(status as any)}
                  />
                  {status === "all"
                    ? "All"
                    : status === "in"
                    ? "In Stock"
                    : "Out of Stock"}
                </label>
              ))}
            </div>
          </div> */}
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sorting */}
          <div className="flex justify-end py-4 mb-8">
            <select
              className="border px-3 py-2 rounded text-sm bg-background"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className="text-center text-gray-500 mt-10">
              Loading products...
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No Bike found.
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

              {/* Pagination */}
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

export default BikeCollections;
