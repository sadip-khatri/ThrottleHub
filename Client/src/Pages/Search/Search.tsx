import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../Components/Ui/ProductCard";
import api from "../../utils/api";
import { useCountry } from "../../Contexts/CountryContext";

type Product = {
  _id?: string;
  id?: number;
  image?: string;
  mainImage?: string;
  title: string;
  price: number;
  category: string;
};

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedCountry } = useCountry();

  const searchQuery = searchParams.get("q") || "";
  const itemsPerPage = 6;

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      let res;
      
      if (searchQuery.trim()) {
        // Use search endpoint if there's a search query
        res = await api.get(`/products/search?q=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        // Use regular products endpoint if no search query
        res = await api.get("/products");
      }
      
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
  }, [searchQuery]);

  // Filter and search products (for additional client-side filtering)
  const filteredAndSearchedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply sorting
    if (sortOption === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedCategories, sortOption]);

  // Get unique categories from products
  const availableCategories = useMemo(() => {
    const categories = new Set(products.map((product) => product.category));
    return Array.from(categories);
  }, [products]);

  const handleCategoryChange = (category: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [category]
    );
  };

  const totalPages = Math.ceil(filteredAndSearchedProducts.length / itemsPerPage);
  const displayedProducts = filteredAndSearchedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="px-4 md:px-16 py-10 bg-white">
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-1">Search Results</h2>
      <p className="text-sm text-gray-500 mb-6">
        {searchQuery && `Searching for: "${searchQuery}"`}
        {filteredAndSearchedProducts.length > 0 
          ? ` - ${filteredAndSearchedProducts.length} items found`
          : " - No products found"
        }
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">CATEGORIES</h3>
            <div className="space-y-1 text-sm text-gray-600">
              {availableCategories.map((cat) => (
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

          {/* Product Grid or Message */}
          {displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <div className="text-lg font-medium mb-2">No products found</div>
              <p className="text-sm">
                {searchQuery 
                  ? `No products match your search for "${searchQuery}"`
                  : "Try adjusting your search terms or filters"
                }
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    id={(product._id || product.id)?.toString() || ""}
                    image={(product.mainImage || product.image) || ""}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
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
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 