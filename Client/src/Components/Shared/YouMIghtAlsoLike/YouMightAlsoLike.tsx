import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCountry } from "../../../Contexts/CountryContext";
import { formatPrice } from "../../../Utils/formatPrice";

const items = [
  {
    id: 1,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag1.jpg",
  },
  {
    id: 2,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag2.jpg",
  },
  {
    id: 3,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag3.jpg",
  },
  {
    id: 4,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag4.jpg",
  },
  {
    id: 5,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag5.jpg",
  },
  {
    id: 6,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag5.jpg",
  },
  {
    id: 7,
    title: "CRINKLE STRIPE DRESS",
    price: 2000,
    image: "/assets/images/bag5.jpg",
  },
];

const YouMightAlsoLike: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selectedCountry } = useCountry();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold">YOU MIGHT ALSO LIKE</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-xl">
            Rooted in the concept of minimalism & re-usability, the bag is a
            classic silhouette that represents a bag that can do it all.
            Comfortable & convenient, the bag is an essential.
          </p>
        </div>
        <Link to="/shop">
          <button className="text-sm border-b border-black hover:opacity-75">
            SHOP NOW →
          </button>
        </Link>
      </div>

      {/* Scrollable Cards */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronRight />
        </button>
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar pr-6"
          ref={scrollRef}
        >
          {items.map((item) => {
            const convertedPrice = item.price * selectedCountry.rate;
            return (
              <div
                key={item.id}
                className="min-w-[220px] bg-[#f7f2ec] rounded-md overflow-hidden shadow-sm shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-800">{item.title}</p>
                  <p className="font-semibold mt-1">
                    {formatPrice(convertedPrice, selectedCountry.currency)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide Scrollbar */}
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

export default YouMightAlsoLike;
