import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../../Ui/ProductCard";
import api from "../../../utils/api";

type Product = {
  _id: string;
  mainImage: string;
  title: string;
  price: number;
  category: string;
};

const categories = ["Bags", "Backpacks", "Totes"];
const itemsPerPage = 6;

const BagCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products"); 
      setProducts(res.data);
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

  const handleCategoryChange = (category: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [category]
    );
  };

  const sortedAndFiltered = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (sortOption === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedCategories, sortOption]);

  const totalPages = Math.ceil(sortedAndFiltered.length / itemsPerPage);
  const displayedProducts = sortedAndFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-1">YOUR PRODUCT COLLECTION</h2>
      <p className="text-sm text-gray-500 mb-6">
        {sortedAndFiltered.length} items
      </p>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/5 space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">CATEGORIES</h3>
              <div className="space-y-1 text-sm text-gray-600">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 -mt-24">
            {/* Sorting */}
            <div className="flex justify-end py-4 mb-8">
              <select
                className="border px-3 py-2 rounded text-sm"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

            {/* Grid or message */}
            {displayedProducts.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                No products found.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => (
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

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 border text-sm rounded hover:bg-gray-100 ${
                        currentPage === i + 1 ? "bg-black text-white" : ""
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
      )}
    </div>
  );
};

export default BagCollections;
