import React, { useState, useMemo } from "react";
import ProductCard from "../../Ui/ProductCard";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

const allProducts: Product[] = [
  {
    id: 101,
    image: "/assets/images/mens1.jpg",
    title: "Classic White Shirt",
    price: 2200,
    category: "Shirts",
  },
  {
    id: 102,
    image: "/assets/images/mens2.jpg",
    title: "Denim Jacket",
    price: 4500,
    category: "Jackets",
  },
  {
    id: 103,
    image: "/assets/images/mens3.jpg",
    title: "Black Leather Shoes",
    price: 3800,
    category: "Shoes",
  },
  {
    id: 104,
    image: "/assets/images/mens4.jpg",
    title: "Slim Fit Jeans",
    price: 3200,
    category: "Jeans",
  },
  {
    id: 105,
    image: "/assets/images/mens5.jpg",
    title: "Polo T-Shirt",
    price: 1800,
    category: "T-Shirts",
  },
  {
    id: 106,
    image: "/assets/images/mens6.jpg",
    title: "Bomber Jacket",
    price: 5200,
    category: "Jackets",
  },
];

const categories = ["Shirts", "Jackets", "Shoes", "Jeans", "T-Shirts"];
const itemsPerPage = 6;

const MensCollections: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [category]
    );
  };

  const sortedAndFiltered = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (sortOption === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategories, sortOption]);

  const totalPages = Math.ceil(sortedAndFiltered.length / itemsPerPage);
  const displayedProducts = sortedAndFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-4 md:px-16 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-1">MEN'S COLLECTION</h2>
      <p className="text-sm text-gray-500 mb-6">
        {sortedAndFiltered.length} items found
      </p>

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

          {/* Product Grid or Message */}
          {displayedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No products found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
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

export default MensCollections;
