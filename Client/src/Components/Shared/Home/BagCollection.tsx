/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import ProductCard from "../../Ui/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const bags = [
  {
    id: 8,
    image: "/bags/black.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    id: 9,
    image: "/bags/brown.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    id: 10,
    image: "/bags/blue.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    id: 11,
    image: "/bags/orange.jpg",
    title: "Crinkle Stripe Dress",
    price: 2000,
  },
  {
    id: 12,
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

  // Function to handle adding product to cart
  const handleAddToCart = (product: any, selectedSize: string = "M") => {
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      selectedSize: selectedSize,
      quantity: 1,
      images: {
        main: product.image,
      },
    };

    // Get existing cart items
    const existingCart = JSON.parse(
      localStorage.getItem("cartProducts") || "[]"
    );

    // Check if product with same ID and size already exists
    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      existingCart.push(cartProduct);
    }

    // Save to localStorage
    localStorage.setItem("cartProducts", JSON.stringify(existingCart));

    // Optional: Show confirmation message
    alert(`${product.title} added to cart!`);
  };

  return (
    <section className="relative px-4 md:px-16 py-10 bg-white">
      {/* Top Text Section */}
      <div className="mb-6 max-w-4xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            BAG COLLECTIONS
          </h2>
          <p className="text-gray-600 mb-4">
            Rooted in the concept of minimalism & re-usability, the bag is a
            classic silhouette that represents a bag that can do it all.
            Comfortable & convenient, the bag is an essential.
          </p>
        </div>
        <Link to="bag-collection">
          <button className="px-5 py-2 border border-black text-sm rounded-full hover:bg-black hover:text-white transition">
            Shop Now →
          </button>
        </Link>
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
              <Link to={`/product/${bag.id}`} className="block">
                <ProductCard {...bag} />
              </Link>
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
