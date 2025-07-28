/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../../Ui/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../../Utils/api";
import { toast } from "react-toastify";

const CarCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [bags, setBags] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const fetchBags = async () => {
    try {
      const res = await api.get("/products");
      // console.log(res.data);
      setBags(res.data.filter((item: any) => item.fit === "Car"));
    } catch (err) {
      console.error("Failed to fetch bags", err);
      setBags([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBags();
  }, []);

  const handleAddToCart = (product: any, selectedSize: string = "M") => {
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      selectedSize,
      quantity: 1,
      images: { main: product.mainImage },
    };
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section className="py-16 bg-surface relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Car Collection</h2>
        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
        >
          <FaChevronRight />
        </button>
        {/* Scrollable Cards */}
        <div
          className="overflow-x-auto scroll-smooth hide-scrollbar mt-6"
          ref={scrollRef}
        >
          <div className="flex items-start w-max gap-6">
            {loading ? (
              <p className="text-secondary">Loading...</p>
            ) : bags.length > 0 ? (
              bags.map((bag) => (
                <div key={bag._id} className="min-w-[220px] shrink-0">
                  <ProductCard
                    id={bag._id}
                    image={bag.mainImage}
                    title={bag.title}
                    price={bag.price}
                    category={bag.category}
                  />
                </div>
              ))
            ) : (
              <p className="text-secondary">No bags found.</p>
            )}
          </div>
        </div>
        {/* Hide Scrollbar Style */}
        <style>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CarCollections;
