import React, { useRef } from "react";
import ProductCard from "../Ui/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ 7 Unique Products
const products = [
  {
    image: "/assets/images/product1.jpg",
    title: "Emerald Leather Dress",
    price: 3200,
  },
  {
    image: "/assets/images/product2.jpg",
    title: "Maroon Puff Sleeve Dress",
    price: 2800,
  },
  {
    image: "/assets/images/product3.jpg",
    title: "Beige Bodycon Dress",
    price: 2500,
  },
  {
    image: "/assets/images/product4.jpg",
    title: "Polka Dot Mini Dress",
    price: 2100,
  },
  {
    image: "/assets/images/product5.jpg",
    title: "Sunset Maxi Dress",
    price: 3600,
  },
  {
    image: "/assets/images/product6.jpg",
    title: "Vintage Denim Dress",
    price: 3100,
  },
  {
    image: "/assets/images/product7.jpg",
    title: "Chic Wrap Dress",
    price: 2900,
  },
];

const NewIn = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
            <p className="text-xs uppercase text-gray-400">60 New Items</p>
            <h2 className="text-2xl font-bold mt-1">NEW IN</h2>
            <p className="text-sm text-gray-500 mt-2">
              Discover all-new arrivals.
            </p>
            <button className="mt-4 px-5 py-2 border border-black text-sm rounded-full hover:bg-black hover:text-white transition">
              Shop Now →
            </button>
          </div>

          {/* Product Cards */}
          {products.map((product, index) => (
            <div key={index} className="min-w-[220px] shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for hiding scrollbar */}
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
};

export default NewIn;
