import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "../../Ui/ProductCard";
import { Link } from "react-router-dom";
import api from "../../../Utils/api"; // Adjust path as per your project

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

const itemsPerPage = 6;

const ExclusiveCollections: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExclusiveProducts = async () => {
      try {
        const response = await api.get("/products?tag=exclusive");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch exclusive products", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExclusiveProducts();
  }, []);

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    if (sortOption === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [products, sortOption]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      {/* Heading + Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">EXCLUSIVE COLLECTIONS</h2>
          <p className="text-sm text-gray-500">
            {loading
              ? "Loading..."
              : `${sortedProducts.length} exclusive items`}
          </p>
        </div>

        <div className="mt-4 md:mt-0">
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
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Static Sidebar */}
        <aside className="w-full md:w-1/5 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">CATEGORY</h3>
            <p className="text-gray-600 text-sm">Exclusive</p>
          </div>
        </aside>

        {/* Main Product Grid */}
        <div className="flex-1 -mt-24 md:mt-0">
          {loading ? (
            <div className="text-center text-gray-500 mt-10">
              Loading products...
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No exclusive items found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <ProductCard {...product} />
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
    </div>
  );
};

export default ExclusiveCollections;
