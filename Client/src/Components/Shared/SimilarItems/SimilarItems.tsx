import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../Ui/ProductCard";
import allProducts from "../../../Data/Productsinfo.json"; // adjust based on where you store your JSON

function SimilarItems({ currentProduct }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  if (!currentProduct) return null;

  const heading = "Similar Items";
  const description = "Discover all-new arrivals.";

  const similarItems = allProducts.filter(
    (item) =>
      item.category.toLowerCase() === currentProduct.category.toLowerCase() &&
      item.id !== currentProduct.id
  );

  return (
    <section className="relative px-4 md:px-16 py-10 bg-white">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth hide-scrollbar"
      >
        <div className="flex items-start w-max gap-4">
          <div className="min-w-[200px] shrink-0">
            <h2 className="text-2xl font-bold mt-1">{heading}</h2>
            <p className="text-sm text-gray-500 mt-2">{description}</p>
            <Link to="/new-arrivals">
              <button className="mt-4 px-5 py-2 border border-black text-sm rounded-full hover:bg-black hover:text-white transition">
                Shop Now →
              </button>
            </Link>
          </div>

          {similarItems.length > 0 ? (
            similarItems.map((item) => (
              <div key={item.id} className="min-w-[220px] shrink-0">
                <Link to={`/product/${item.id}`}>
                  <ProductCard {...item} />
                </Link>
              </div>
            ))
          ) : (
            <div className="min-w-[220px] shrink-0 text-gray-500 italic">
              No similar items found.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default SimilarItems;
