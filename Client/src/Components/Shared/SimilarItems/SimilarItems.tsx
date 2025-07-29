/* eslint-disable @typescript-eslint/no-unused-vars */
// src/Components/Shared/SimilarItems/SimilarItems.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import api from "../../../Utils/api";
import ProductCard from "../../Ui/ProductCard";
import { useCountry } from "../../../Contexts/CountryContext";

type Product = {
  _id: string;
  mainImage: string;
  title: string;
  price: number;
  category: string;
  stock: number;
  fit: string;
};

interface SimilarItemsProps {
  currentProduct: Product;
}

const SimilarItems: React.FC<SimilarItemsProps> = ({ currentProduct }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [similar, setSimilar] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useCountry();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await api.get<Product[]>("/products");
        const filtered = res.data.filter(
          (p) =>
            p.fit?.toLowerCase() === currentProduct.fit?.toLowerCase() &&
            p._id !== currentProduct._id
        );
        setSimilar(filtered);
      } catch (err) {
        console.error("Failed to load similar items", err);
      } finally {
        setLoading(false);
      }
    };

    if (currentProduct) fetchProducts();
  }, [currentProduct]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!currentProduct) return null;

  return (
    <section className="relative px-4 md:px-16 py-10 bg-surface">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background border border-accent rounded-full p-2 z-10 shadow-md hover:bg-surface cursor-pointer"
      >
        <FaChevronRight />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth hide-scrollbar"
      >
        <div className="flex items-start w-max gap-4">
          <div className="min-w-[200px] shrink-0">
            <h2 className="text-2xl font-bold mt-1">Similar Items</h2>
            <p className="text-sm text-primary mt-2">
              Discover new arrivals in this category.
            </p>
            <Link to={`/${currentProduct.category?.toLowerCase()}`}>
              <button className="mt-4 px-5 py-2 border rounded-full hover:bg-accent cursor-pointer hover:text-black transition">
                Shop Category →
              </button>
            </Link>
          </div>

          {loading ? (
            <div className="flex items-center justify-center p-10">
              Loading...
            </div>
          ) : similar.length > 0 ? (
            similar.map((item) => (
              <div key={item._id} className="min-w-[220px] shrink-0">
                <ProductCard
                  id={item._id}
                  image={item.mainImage}
                  title={item.title}
                  price={item.price}
                  category={item.fit}
                />
              </div>
            ))
          ) : (
            <div className="min-w-[220px] shrink-0 text-primary italic">
              No similar items found.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 1px solid #ccc;
          padding: 8px;
          z-index: 10;
          cursor: pointer;
          border-radius: 9999px;
        }
        .arrow.left { left: 8px; }
        .arrow.right { right: 8px; }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default SimilarItems;
