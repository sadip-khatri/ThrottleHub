/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../Ui/ProductCard"; 
import api from "../../../Utils/api";


function MensCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mensProducts, setMensProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const fetchMensProducts = async () => {
    try {
      const res = await api.get("/products");
      setMensProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch men's products", err);
      setMensProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMensProducts();
  }, []);

  const heading = "Men’s Collection";
  const description = "Discover premium styles for every occasion.";

  return (
    <section className="relative px-4 md:px-16 py-10 bg-white">
      {/* Arrow Buttons */}
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

      {/* Scrollable Container */}
      <div
        className="overflow-x-auto scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        <div className="flex items-start w-max gap-4">
          {/* Intro Text Box */}
          <div className="min-w-[200px] shrink-0">
            <h2 className="text-2xl font-bold mt-1">{heading}</h2>
            <p className="text-sm text-gray-500 mt-2">{description}</p>
            <Link to="mens-collection">
              <button className="mt-4 px-5 py-2 border cursor-pointer border-black text-sm rounded-full hover:bg-black hover:text-white transition">
                Shop Now →
              </button>
            </Link>
          </div>

          {/* Product Cards */}
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : mensProducts.length > 0 ? (
            mensProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="min-w-[220px] shrink-0"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <ProductCard
  id={product._id} 
  image={product.mainImage}
  title={product.title}
  price={product.price}
  category={product.category}
/>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No men's products found.</p>
          )}
        </div>
      </div>

      {/* Inline CSS to hide scrollbar */}
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

export default MensCollection;
