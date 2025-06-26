import React, { useMemo, useState } from "react";
import ProductCard from "../../Ui/ProductCard";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

const allProducts: Product[] = [
  {
    id: 15,
    image: "/bags/extra.jpg",
    title: "Exclusive Item 1",
    price: 2000,
    category: "exclusive",
  },
  {
    id: 16,
    image: "/bags/extra.jpg",
    title: "Exclusive Item 2",
    price: 2200,
    category: "exclusive",
  },
  {
    id: 17,
    image: "/bags/extra.jpg",
    title: "Exclusive Item 3",
    price: 1800,
    category: "exclusive",
  },
  // Add more if needed
];

const itemsPerPage = 6;

const ExclusiveCollections: React.FC = () => {
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let result = allProducts;

    if (sortOption === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [sortOption]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayedProducts = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      {/* Heading + Sort Dropdown on Same Line */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">EXCLUSIVE COLLECTIONS</h2>
          <p className="text-sm text-gray-500">
            {filtered.length} exclusive items
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
        {/* Sidebar (Static for now) */}
        <aside className="w-full md:w-1/5 space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">CATEGORY</h3>
            <p className="text-gray-600 text-sm">Exclusive</p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 -mt-24 md:mt-0">
          {/* Product Grid */}
          {displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No exclusive items found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <Link key={product.id} to="">
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
