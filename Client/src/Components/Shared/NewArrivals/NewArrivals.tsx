/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../../Ui/ProductCard";
import { Link } from "react-router-dom";
import api from "../../../Utils/api";

type Product = {
  _id?: string;
  id: number;
  mainImage: string;
  title: string;
  price: number;
  fit: string;
  stock: number;
};

const fits = ["Bike", "Car", "Bike Part", "Car Part"];
const itemsPerPage = 6;
const maxPrice = 9000000;

const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedFits, setSelectedFits] = useState<string[]>([]);
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortOption, setSortOption] = useState<"relevance" | "low" | "high">(
    "relevance"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        const allowedIds = [8, 20, 23, 30];
        const filtered = res.data.filter((p: Product) =>
          allowedIds.includes(p.id)
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Toggle selected fits on checkbox click
  const handleFitChange = (fit: string) => {
    setCurrentPage(1);
    setSelectedFits((prev) =>
      prev.includes(fit) ? prev.filter((f) => f !== fit) : [...prev, fit]
    );
  };

  // Optional: handle stock filter change (if you want to add a filter UI later)
  const handleStockFilterChange = (filter: "all" | "in" | "out") => {
    setCurrentPage(1);
    setStockFilter(filter);
  };

  // Filter + Sort products
  const sortedAndFiltered = useMemo(() => {
    let filtered = products;

    // Filter by selected fits
    if (selectedFits.length > 0) {
      filtered = filtered.filter((p) => selectedFits.includes(p.fit));
    }

    // Filter by stock
    if (stockFilter === "in") {
      filtered = filtered.filter((p) => p.stock > 0);
    } else if (stockFilter === "out") {
      filtered = filtered.filter((p) => p.stock === 0);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    if (sortOption === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    // else "relevance" keeps original order

    return filtered;
  }, [products, selectedFits, stockFilter, priceRange, sortOption]);

  // Pagination calculations
  const totalPages = Math.ceil(sortedAndFiltered.length / itemsPerPage);
  const displayedProducts = sortedAndFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-surface text-primary">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <h2 className="text-3xl text-center font-bold mb-4 border-b border-gray-300 pb-3">
          NEW ARRIVALS
        </h2>

        {/* Filters: Fits checkboxes */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {fits.map((fit) => (
            <label
              key={fit}
              className="inline-flex items-center cursor-pointer select-none"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-cyan-500"
                checked={selectedFits.includes(fit)}
                onChange={() => handleFitChange(fit)}
              />
              <span className="ml-2">{fit}</span>
            </label>
          ))}
        </div>

        {/* Sorting dropdown */}
        <div className="flex justify-end py-4 mb-8">
          <select
            className="border px-3 py-2 rounded text-sm bg-background"
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value as "relevance" | "low" | "high")
            }
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center text-gray-500 mt-10">
            Loading products...
          </div>
        ) : displayedProducts.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No products found.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <Link
                  to={`/product/${product._id || product.id}`}
                  key={product._id || product.id}
                  className="block"
                >
                  <ProductCard
                    id={product._id || product.id}
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
                    currentPage === i + 1 ? "bg-cyan-400 text-white" : ""
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
  );
};

export default NewArrivals;
