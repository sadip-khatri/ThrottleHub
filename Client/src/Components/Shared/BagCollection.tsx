import React, { useRef } from "react";
import ProductCard from "../Ui/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const bags = [
  {
    image: "/bags/black.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    image: "/bags/brown.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    image: "/bags/blue.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    image: "/bags/orange.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    image: "/bags/extra.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
];

const BagCollection = () => {
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
      {/* Top Text Section */}
      <div className="mb-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">BAG COLLECTIONS</h2>
        <p className="text-gray-600 mb-4">
          Rooted in the concept of minimalism & re-usability, the bag is a
          classic silhouette that represents a bag that can do it all.
          Comfortable & convenient, the bag is an essential.
        </p>
        <button className="px-5 py-2 border border-black text-sm rounded-full hover:bg-black hover:text-white transition">
          Shop Now →
        </button>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[60%]  transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[60%]  transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Cards Section */}
      <div
        className="overflow-x-auto scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        <div className="flex items-start w-max gap-4">
          {bags.map((bag, index) => (
            <div key={index} className="min-w-[220px] shrink-0">
              <ProductCard {...bag} />
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for scrollbar hiding */}
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

export default BagCollection;
