import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../Ui/ProductCard"; // Adjust path if needed

const mensProducts = [
  {
    id: 13,
    image: "/assets/images/mens1.jpg",
    title: "Denim Utility Jacket",
    price: 4500,
  },
  {
    id: 14,
    image: "/assets/images/mens2.jpg",
    title: "Classic Fit Cotton Shirt",
    price: 2200,
  },
  {
    id: 15,
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    id: 16,
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    id: 17,
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
  {
    id: 18,
    image: "/assets/images/mens3.jpg",
    title: "Slim Fit Blazer",
    price: 5000,
  },
];

function MensCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

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
          {mensProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="min-w-[220px] shrink-0"
            >
              <Link to={`/product/${product.id}`} className="block">
                <ProductCard {...product} key={product.id}/>
              </Link>
            </div>
          ))}
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
