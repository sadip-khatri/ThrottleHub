/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../Ui/ProductCard";
import api from "../../../Utils/api";

function BikeCollection() {
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
      console.log("Fetched products:", res.data);

      // Filter by 'fit' instead of 'category'
      setMensProducts(
        res.data.filter((item: any) => item.fit?.toLowerCase() === "bike")
      );
    } catch (err) {
      console.error("Failed to fetch products", err);
      setMensProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMensProducts();
  }, []);

  const heading = "LAPTOP Collection";
  const description = "Premium laptops for every need and occasion.";

  return (
    <section className="py-16 bg-surface relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          Bike Collection
        </h2>
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
              <p className="text-secondary">No men's products found.</p>
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
}

export default BikeCollection;
